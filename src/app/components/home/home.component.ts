import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  has_voted: any;
  constructor(private _auth: AuthenticationService, private _route: Router) {}

  checkAuthentication(): boolean {
    const userId = localStorage.getItem('user');
    return !!userId;
  }
  ngOnInit(): void {
    if (!this.checkAuthentication()) {
      this._route.navigate(['/login']);
    }
  }

  logout() {}

  navigateVote() {}
}
