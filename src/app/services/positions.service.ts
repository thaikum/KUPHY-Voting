import { Injectable } from '@angular/core';
import { UserDetails } from './user.service';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';

interface Position {
  positionName: string;
}

@Injectable({
  providedIn: 'root',
})
export class PositionsService {
  posCol!: AngularFirestoreCollection<Position>;

  constructor(private _firestore: AngularFirestore) {}

  async regPosition(positionName: string): Promise<any> {
    positionName = positionName.toUpperCase();

    let exists;
    await this.positionExists(positionName).then((data) => {
      exists = data;
    });

    if (!exists) {
      return;
    }

    this.posCol = this._firestore.collection('position');
    await this.posCol
      .add({ positionName: positionName })
      .then(() => {
        return true;
      })
      .catch((err) => {
        throw err;
      });
  }

  async positionExists(positionName: string): Promise<boolean> {
    positionName = positionName.toUpperCase();
    let resp = false;
    this._firestore
      .collection('users', (ref) =>
        ref.where('positionName', '==', positionName)
      )
      .get()
      .subscribe((dt) => {
        resp = !dt.empty;
      });
    return resp;
  }
}
