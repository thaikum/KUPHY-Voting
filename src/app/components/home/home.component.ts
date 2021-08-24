import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private _auth: AuthenticationService, private _route: Router) {}

  async checkAuthentication(): Promise<boolean> {
    let userId = '';
    await this._auth.getLoggedInUser().then((id) => {
      userId = id;
    });
    return !!userId;
  }
  ngOnInit(): void {
    this.checkAuthentication().then((val) => {
      if (!val) {
        this._route.navigate(['/login']).then(() => {});
      }
    });
  }

  logout() {}
}
