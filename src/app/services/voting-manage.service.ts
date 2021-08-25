import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class VotingManageService {
  constructor(private _firestore: AngularFirestore) {}

  async commenceVoting(): Promise<any> {
    this._firestore
      .doc('voting/commencevoting')
      .set({ start: true })
      .then(() => {
        return true;
      })
      .catch((err) => {
        throw err;
      });
  }

  async stop(): Promise<any> {
    this._firestore
      .doc('voting/commencevoting')
      .set({ start: false })
      .then(() => {
        return true;
      })
      .catch((err) => {
        throw err;
      });
  }

  getVotingStatus() {
    return this._firestore.doc('voting/commencevoting').valueChanges();
  }
}
