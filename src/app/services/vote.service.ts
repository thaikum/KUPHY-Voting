import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root',
})
export class VoteService {
  constructor(
    private _firestore: AngularFirestore,
    private _auth: AuthenticationService
  ) {}

  async voteFor(userId: string): Promise<any> {
    let voter = '';
    await this._auth.getLoggedInUser().then((id) => {
      voter = id;
    });
    let hasVoted;
    await this._firestore
      .doc('users/' + voter)
      .get()
      .subscribe((snapshot) => {
        snapshot.data();
        //@ts-ignore
        hasVoted = snapshot.data()?.hasVoted;
      });

    if (hasVoted) {
      throw new Error('has already voted');
    }
    this._firestore
      .doc('users/' + userId)
      .get()
      .subscribe(async (doc) => {
        const data = doc.data();
        //@ts-ignore
        if (data?.votes) {
          //@ts-ignore
          const newNotes = data?.votes + 1;
          await this._firestore
            .doc('users/' + userId)
            .update({ votes: newNotes })
            .then(async () => {
              this._firestore
                .doc('users/' + voter)
                .update({ hasVoted: true })
                .then(() => true)
                .catch((err) => {
                  throw err;
                });
            })
            .catch((err) => {
              return err;
            });
        } else {
          throw new Error('The user is not a voter');
        }
      });
  }
}
