import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VoteService {
  constructor(
    private _firestore: AngularFirestore,
    private _auth: AuthenticationService
  ) {}

  async voteFor(userId: string): Promise<any> {
    const voter = localStorage.getItem('user');
    console.log(userId);
    let hasVoted;
    await this._firestore
      .doc('users/' + voter)
      .ref.get()
      .then((user) => {
        // @ts-ignore
        if (!user.data()?.hasVoted) {
          this._firestore
            .doc('aspirants/' + userId)
            .ref.get()
            .then((dt) => {
              const data = dt.data();
              console.log(data);
              //@ts-ignore
              const votes = data.votesCount + 1;
              dt.ref
                .update({ votesCount: votes })
                .then(() => {
                  return true;
                })
                .catch((err) => {
                  throw err;
                });
            });
        } else {
          throw new Error('has already voted');
        }
      });
  }

  async setHasVotedTrue(): Promise<any> {
    const userId = localStorage.getItem('user');
    this._firestore
      .doc('users/' + userId)
      .update({ hasVoted: true })
      .then()
      .catch((err) => {
        return err;
      });
  }
}
