import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  is_authenticated = false;
  has_voted = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}
  navigateVote() {
    this.router.navigate(['/vote']);
  }
}
