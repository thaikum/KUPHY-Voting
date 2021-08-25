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

  // getUsers(): void {
  //   this._user.getUsers().subscribe((user) => {
  //     console.log(user);
  //   });
  // }
  ngOnInit(): void {}
}
