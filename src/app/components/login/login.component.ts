import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loading = false;
  error = '';
  constructor(private _auth: AuthenticationService, private _route: Router) {}

  ngOnInit(): void {}

  login(loginForm: NgForm) {
    this.loading = true;

    const password = loginForm.value.password;
    const email = loginForm.value.email;

    this._auth
      .login(email, password)
      .then(() => {
        this.loading = false;
        this._route.navigate(['/']).then(() => {});
      })
      .catch((err) => {
        this.loading = false;
        this.error = err.message;
      });
  }
}
