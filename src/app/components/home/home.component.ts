import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  has_voted = true;
  isVerified = false;
  isAdmin = false;

  constructor(
    private _auth: AuthenticationService,
    private _route: Router,
    private _user: UserService
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
  }

  getUser(): void {
    const userId = localStorage.getItem('user');
    if (typeof userId === 'string') {
      this._user.getUser(userId).subscribe((user) => {
        if (user?.isVerified) {
          this.isVerified = true;
        }
        if (user?.isAdmin) {
          this.isAdmin = true;
        }
      });
    }
  }

  logout() {
    this._auth.signOut().then(() => {
      this._route.navigate(['/login']);
    });
  }

  navigateVote() {}
}
