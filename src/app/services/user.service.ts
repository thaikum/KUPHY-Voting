import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs';

export interface UserDetails {
  userName: string;
  regNo: string;
  isAdmin?: boolean;
  isVerified?: boolean;
  hasVoted?: boolean;
  isAspirant?: boolean;
  photoLocation?: string;
  nickName?: string;
  positionAspiredFor?: string;
  votes?: number;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userCollection!: AngularFirestoreCollection<UserDetails>;
  userDocument!: AngularFirestoreDocument<UserDetails>;

  constructor(
    private _firestore: AngularFirestore,
    private _auth: AuthenticationService
  ) {}

  async updateUserDetails(userName: string, regNo: string): Promise<any> {
    let userId: string | undefined;
    regNo = regNo.toUpperCase();
    await this._auth.getLoggedInUser().then((id) => {
      userId = id;
    });

    this.userDocument = this._firestore.doc('users/' + userId);

    await this.userDocument
      .set({ userName, regNo })
      .then(() => {
        return true;
      })
      .catch((err) => {
        throw err;
      });
  }

  async userExists(regNo: string): Promise<boolean> {
    this.userCollection = this._firestore.collection('users', (ref) =>
      ref.where('regNo', '==', regNo)
    );

    let exists = false;
    await this.userCollection
      .get()
      .toPromise()
      .then((dt) => {
        exists = !!dt;
      });

    return exists;
  }

  getUsers(): Observable<any> {
    return this._firestore
      .collection('users')
      .valueChanges({ idField: 'docId' });
  }

  async verifyVoter(docId: string): Promise<any> {
    this.userDocument = this._firestore.doc('users/' + docId);
    this.userDocument
      .update({ isVerified: true })
      .then(() => {
        return true;
      })
      .catch((err) => {
        throw err;
      });
  }

  async deverify(docId: string): Promise<any> {
    this.userDocument = this._firestore.doc('users/' + docId);
    this.userDocument
      .update({ isVerified: false })
      .then(() => {
        return true;
      })
      .catch((err) => {
        throw err;
      });
  }

  getUser(userId: string): Observable<UserDetails | undefined> {
    this.userDocument = this._firestore.doc('users/' + userId);
    return this.userDocument.valueChanges();
  }
}
