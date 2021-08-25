import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AspirantService } from '../../services/aspirant.service';
import { VoteService } from '../../services/vote.service';
import { take } from 'rxjs/operators';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css'],
})
export class VoteComponent implements OnInit {
  aspirants = [];
  votedId = '';
  title = '';
  positions = [
    'President',
    'Vice President',
    'Secretary General',
    'Deputy Secretary General',
    'Organising Secretary',
    'Deputy Organising Secretary',
    'Treasure',
    'Overall Representative',
    '4th Year Male Representative',
    '4th Year Female Representative',
    '3th Year Male Representative',
    '3th Year Female Representative',
    '2th Year Male Representative',
    '2th Year Female Representative',
  ];

  times = 0;
  constructor(
    private router: Router,
    private _asp: AspirantService,
    private _vote: VoteService,
    private _user: UserService
  ) {}

  indexPosition = 0;
  ngOnInit(): void {
    this.checkHasVoted();
    const check = localStorage.getItem('lastIndex');
    if (check == null || check == undefined) {
      localStorage.setItem('lastIndex', '0');
    }
    this.changePosition();
  }

  getAspirants(position: string) {
    this._asp.getAspirants(position).subscribe((aspirants) => {
      if (this.times == 0) {
        // @ts-ignore
        this.aspirants = aspirants;
        this.times = 1;
      }
    });
  }

  getAsp(aspirant: any) {
    const {
      aspirantName,
      aspirantRegNo,
      aspirantNickName,
      aspirantPicLocation,
      aspirantPosition,
      aspId,
    } = aspirant;
    const newAsp = {
      name: aspirantName,
      regNo: aspirantRegNo,
      nickName: aspirantNickName,
      position: aspirantPosition,
      imageUrl: aspirantPicLocation,
      aspId,
    };

    return newAsp;
  }

  changePosition(): void {
    this.aspirants = [];
    this.votedId = '';

    const index = parseInt(<string>localStorage.getItem('lastIndex'));

    if (index === this.positions.length) {
      this._vote.setHasVotedTrue();
      this.router.navigate(['/']);
    } else {
      this.title = this.positions[index];
      this.getAspirants(this.title);

      let item = parseInt(<string>localStorage.getItem('lastIndex')) + 1;
      localStorage.setItem('lastIndex', String(item));
    }
  }

  navigateHome() {
    this.router.navigate(['']);
  }

  vote() {
    this.times = 0;
    this._vote
      .voteFor(this.votedId)
      .then(() => {
        this.changePosition();
      })
      .catch((err) => {
        throw err;
      });
  }

  checkHasVoted() {
    const userId = localStorage.getItem('user');
    if (typeof userId === 'string') {
      this._user.getUser(userId).subscribe((user) => {
        if (user?.hasVoted) {
          this.router.navigate(['/']);
        }
      });
    }
  }

  keepRecord(index: number) {
    localStorage.setItem('lastIndex', String(index));
  }

  changeVote(aspId: any) {
    this.votedId = aspId;
  }
}
