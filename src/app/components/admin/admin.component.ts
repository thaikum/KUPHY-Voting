import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { UserService } from '../../services/user.service';
import { VotingManageService } from '../../services/voting-manage.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  constructor(
    private _router: Router,
    private _user: UserService,
    private _voteMng: VotingManageService
  ) {}

  page = 'Add Aspirant';
  sessionHasStarted: unknown = false;

  chenckAdminStatus(): void {
    const userId = localStorage.getItem('user');
    if (typeof userId === 'string') {
      this._user.getUser(userId).subscribe((user) => {
        if (!user?.isAdmin) {
          this._router.navigate(['/']).then(() => {});
        }
      });
    }
  }

  ngOnInit(): void {
    this.chenckAdminStatus();
    this.voteStatus();
  }

  navigateHome() {
    this._router.navigate(['/']);
  }

  switchPage(page: string) {
    this.page = page;
  }
  voteStatus() {
    this._voteMng.getVotingStatus().subscribe((val) => {
      this.sessionHasStarted = val;
    });
  }
  commenceVoting() {
    if (this.sessionHasStarted) {
      this._voteMng
        .stop()
        .then()
        .catch((err) => {
          throw err;
        });
    } else {
      this._voteMng
        .commenceVoting()
        .then()
        .catch((err) => {
          throw err;
        });
    }
  }
}
