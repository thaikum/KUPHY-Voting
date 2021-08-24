import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  loading = false;
  error = '';
  constructor(
    private _auth: AuthenticationService,
    private _user: UserService,
    private _route: Router
  ) {}

  ngOnInit(): void {}

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  PdMismatchError() {
    return 'password mismatch';
  }

  signup(signupForm: NgForm) {
    this.loading = true;

    if (signupForm.value.password !== signupForm.value.password2) {
      this.error = 'Password do not match';
      this.loading = false;
      signupForm.controls['password'].reset();
      signupForm.controls['password2'].reset();
      return;
    }

    const email = signupForm.value.email;
    const password = signupForm.value.password;

    this._auth
      .signUp(email, password)
      .then(() => {
        const regNo = signupForm.value.regNo;
        const userName = signupForm.value.userName;

        this._user
          .updateUserDetails(userName, regNo)
          .then(() => {
            signupForm.reset();
            this.loading = false;
            this._route.navigate(['/']).then(() => {});
          })
          .catch((err) => {
            this.loading = false;
            signupForm.reset();
            this.error = err.message;
          });
      })
      .catch((err) => {
        this.loading = false;
        this.error = err.message;
      });
  }
}
