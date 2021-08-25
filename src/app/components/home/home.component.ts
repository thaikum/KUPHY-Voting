import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { VotingManageService } from '../../services/voting-manage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  hasVoted: boolean | undefined = false;
  isVerified: boolean | undefined = false;
  isAdmin: boolean | undefined = false;
  voteSessionActive: any;

  constructor(
    private _auth: AuthenticationService,
    private _route: Router,
    private _user: UserService,
    private _voteMng: VotingManageService
  ) {}

  checkAuthentication(): boolean {
    const userId = localStorage.getItem('user');
    return !!userId;
  }
  ngOnInit(): void {
    if (!this.checkAuthentication()) {
      this._route.navigate(['/login']);
    }
    this.getUser();
    this.getVoteStatus();
  }

  getUser(): void {
    const userId = localStorage.getItem('user');
    if (typeof userId === 'string') {
      this._user.getUser(userId).subscribe((user) => {
        this.isVerified = user?.isVerified;
        this.isAdmin = user?.isAdmin;
        this.hasVoted = user?.hasVoted;
      });
    }
  }

  logout() {
    this._auth.signOut().then(() => {
      this._route.navigate(['/login']);
    });
  }

  getVoteStatus(): void {
    this._voteMng.getVotingStatus().subscribe((sessionOpen) => {
      console.log(sessionOpen);
      // @ts-ignore
      this.voteSessionActive = sessionOpen?.start;
    });
  }

  navigateVote() {
    this._route.navigate(['/vote']);
  }
}
