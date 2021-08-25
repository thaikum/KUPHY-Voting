import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { UserDetails } from './user.service';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';

interface Aspirant {
  aspirantName: string;
  aspirantRegNo: string;
  aspirantNickName: string;
  aspirantPicLocation?: string;
  aspirantPosition: string;
  votesCount: number;
}

@Injectable({
  providedIn: 'root',
})
export class AspirantService {
  aspDoc!: AngularFirestoreDocument<UserDetails>;
  aspCol!: AngularFirestoreCollection<Aspirant>;

  constructor(
    private _firestore: AngularFirestore,
    private _storage: AngularFireStorage
  ) {}

  async registerAspirant(
    aspirantRegNo: string,
    aspirantName: string,
    aspImage: File,
    aspirantNickName: string,
    aspirantPosition: string
  ): Promise<any> {
    this.aspCol = this._firestore.collection('aspirants');
    if (aspImage) {
      const rand = Math.floor(Math.random() + 1000).valueOf();
      this._storage.upload(rand + aspImage.name, aspImage).then((ref) => {
        ref.ref.getDownloadURL().then(async (url) => {
          if (typeof url === 'string') {
            await this.aspCol
              .add({
                aspirantRegNo,
                aspirantName,
                aspirantNickName,
                aspirantPosition,
                votesCount: 0,
                aspirantPicLocation: url,
              })
              .then((ref) => {
                return true;
              })
              .catch((err) => {
                throw err;
              });
          } else {
            await this.aspCol
              .add({
                aspirantRegNo,
                aspirantName,
                aspirantNickName,
                aspirantPosition,
                votesCount: 0,
                aspirantPicLocation: url,
              })
              .then((ref) => {
                return true;
              })
              .catch((err) => {
                throw err;
              });
          }
        });
      });
    }
  }

  async aspirantEsists(regNo: string): Promise<any> {
    this.aspCol = this._firestore.collection('aspirants', (ref) =>
      ref.where('aspirantRegNo', '==', regNo)
    );

    let exists = false;
    await this.aspCol
      .get()
      .toPromise()
      .then((dt) => {
        dt.forEach((data) => {
          if (data.data()) {
            exists = true;
          }
        });
      });

    return exists;
  }

  getAspirants(position: string): Observable<Aspirant[]> {
    this.aspCol = this._firestore.collection('aspirants', (ref) =>
      ref.where('aspirantPosition', '==', position)
    );
    return this.aspCol.valueChanges({ idField: 'aspId' });
  }

  getAllAspirants(): Observable<Aspirant[]> {
    this.aspCol = this._firestore.collection('aspirants');
    return this.aspCol.valueChanges({ idField: 'aspId' });
  }
}
