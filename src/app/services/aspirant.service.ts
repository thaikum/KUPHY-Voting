import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { UserDetails } from './user.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AspirantService {
  aspDoc!: AngularFirestoreDocument<UserDetails>;
  aspCol!: AngularFirestoreCollection<UserDetails>;
  constructor(
    private _firestore: AngularFirestore,
    private _storage: AngularFireStorage
  ) {}

  async registerAspirant(
    userId: string,
    aspImage: File,
    aspNickName: string,
    position: string
  ): Promise<any> {
    this.aspDoc = this._firestore.doc('users/' + userId);
    this.aspDoc
      .update({ isAspirant: true, positionAspiredFor: position, votes: 0 })
      .then(() => {
        this._storage
          .upload(userId + aspImage.name, aspImage)
          .then((imageRef) => {
            imageRef.ref.getDownloadURL().then((url) => {
              this.aspDoc
                .update({
                  photoLocation: url,
                })
                .then(() => true)
                .catch((err) => {
                  throw err;
                });
            });
          });
      })
      .catch((err) => {
        throw err;
      });
  }

  getAspirantByPosition(positionName: string): Observable<UserDetails[]> {
    this.aspCol = this._firestore.collection('users', (ref) =>
      ref.where('positionAspiredFor', '==', positionName).orderBy('votes')
    );
    return this.aspCol.valueChanges({ idField: 'userId' });
  }

  getAspirantByReg(reg: string): Observable<any> {
    return this._firestore
      .collection('users', (ref) => ref.where('regNo', '==', reg))
      .valueChanges({ idField: 'docId' });
  }
}
