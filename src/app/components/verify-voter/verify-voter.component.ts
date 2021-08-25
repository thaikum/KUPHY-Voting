import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-verify-voter',
  templateUrl: './verify-voter.component.html',
  styleUrls: ['./verify-voter.component.css'],
})
export class VerifyVoterComponent implements OnInit {
  verifiedUser = [];
  pendingVerification = [];
  unverified = [];
  constructor(private _user: UserService) {}

  getUsers(): void {
    this._user.getUsers().subscribe((users) => {
      this.verifiedUser = users.filter((user: any) => user.isVerified);
      this.unverified = users.filter((user: any) => user.isVerified === false);
      this.pendingVerification = users.filter(
        (user: any) => !('isVerified' in user)
      );
    });
  }
  ngOnInit(): void {
    this.getUsers();
  }
  getVals(user: any): any {
    const { userName, regNo, docId } = user;
    return { userName, regNo, docId };
  }

  verifyVoter(user: any): void {
    const uid = user.docId;
    this._user
      .verifyVoter(uid)
      .then(() => {
        console.log('verified');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  deverifyVoter(user: any) {
    const uid = user.docId;
    this._user
      .deverify(uid)
      .then(() => {
        console.log('verified');
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
