import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css'],
})
export class VoteComponent implements OnInit {
  constructor(private router: Router) {}

  indexPosition = 0;
  ngOnInit(): void {}
  aspirants = [
    {
      name: 'musa minembo',
      regNo: 'J32/335/2016',
      nickName: 'musa adrian',
      position: 'Chair',
      imageUrl: '/assets/1.jpeg',
    },
    {
      name: 'Caleb chefi',
      regNo: 'J32/38899/2016',
      nickName: '',
      position: 'Chair',
    },
    {
      name: 'Amos koth',
      regNo: 'J32/98975/2016',
      nickName: 'musa adrian',
      position: 'Chair',
      imageUrl: '/assets/2.jpeg',
    },
    {
      name: 'Mr Hacker',
      regNo: 'J32/33599/2016',
      nickName: 'musa adrian',
      position: 'Chair',
      imageUrl: '/assets/3.jpeg',
    },
    {
      name: 'Kering mercy',
      regNo: 'J32/334345/2016',
      nickName: 'musa adrian',
      position: 'Chair',
      imageUrl: '/assets/4.jpeg',
    },
  ];

  positions = ['chair', 'vice chair', 'delegate'];

  navigateHome() {
    this.router.navigate(['']);
  }
}
