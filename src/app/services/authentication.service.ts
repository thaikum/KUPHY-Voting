import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import auth from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(
    private _auth: AngularFireAuth,
    private _firestore: AngularFirestore
  ) {}

  async login(email: string, password: string): Promise<any> {
    this._auth
      .setPersistence(auth.auth.Auth.Persistence.LOCAL)
      .then(async () => {
        await this._auth
          .signInWithEmailAndPassword(email, password)
          .then((user) => {
            return true;
          })
          .catch((err) => {
            throw err;
          });
      });
  }

  async signUp(email: string, password: string): Promise<any> {
    await this._auth
      .createUserWithEmailAndPassword(email, password)
      .then((usr) => {
        return true;
      })
      .catch((err) => {
        throw err;
      });
  }

  async getLoggedInUser(): Promise<any> {
    let userid: string | undefined;
    await this._auth.currentUser.then((usr) => {
      userid = usr?.uid;
    });
    return userid;
  }
}
