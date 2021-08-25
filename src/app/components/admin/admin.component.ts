import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  constructor(private _router: Router, private _user: UserService) {}

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
  }

  navigateHome() {
    this._router.navigate(['/']);
  }
}
