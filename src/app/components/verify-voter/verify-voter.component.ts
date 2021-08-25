import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verify-voter',
  templateUrl: './verify-voter.component.html',
  styleUrls: ['./verify-voter.component.css'],
})
export class VerifyVoterComponent implements OnInit {
  verifiedUser = [];
  pendingVerification = [];
  unverified = [];
  constructor() {}

  getUsers(): void {}
  ngOnInit(): void {}
}
