import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AspirantService } from '../../services/aspirant.service';
import { VoteService } from '../../services/vote.service';
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
  constructor(
    private router: Router,
    private _asp: AspirantService,
    private _vote: VoteService
  ) {}

  indexPosition = 0;
  ngOnInit(): void {
    this.changePosition();
  }

  getAspirants(positions: string) {
    this._asp.getAspirants(positions).subscribe((aspirants) => {
      if (aspirants.length == 0) {
        this.changePosition();
      }
      // @ts-ignore
      this.aspirants = aspirants;
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
    this.votedId = '';
    this.title = this.positions[this.indexPosition];
    this.getAspirants(this.positions[this.indexPosition]);
    if (this.indexPosition === this.positions.length - 1) {
      this._vote.setHasVotedTrue();
    }
    this.indexPosition++;
  }

  navigateHome() {
    this.router.navigate(['']);
  }

  vote() {
    this._vote
      .voteFor(this.votedId)
      .then(() => {
        this.changePosition();
      })
      .catch((err) => {
        throw err;
      });
  }

  changeVote(aspId: any) {
    this.votedId = aspId;
  }
}
