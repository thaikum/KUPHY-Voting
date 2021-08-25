import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewaprirant',
  templateUrl: './viewaprirant.component.html',
  styleUrls: ['./viewaprirant.component.css'],
})
export class ViewaprirantComponent implements OnInit {
  constructor(private router: Router) {}

  President: any = '';
  VicePresident: any = '';
  SecretaryGeneral: any = '';
  DeputySecretaryGeneral: any = '';
  OrganisingSecretary: any = '';
  DeputyOrganisingSecretary: any = '';
  Treasure: any = '';
  OverallRepresentative: any = '';
  FrthYearMaleRepresentative: any = '';
  FrthYearFemaleRepresentative: any = '';
  ThirdthYearMaleRepresentative: any = '';
  ThirdYearFemaleRepresentative: any = '';
  SecondYearMaleRepresentative: any = '';
  SecondYearFemaleRepresentative: any = '';

  aspirantPositions = [
    'President',
    'Vice President',
    'Secretary General',
    'Deputy Secretary General',
    'Organising Secretary',
    'Deputy Organising Secretary',
    'Treasurer',
    'Overall Representative',
    '4th Year Male Representative',
    '4th Year Female Representative',
    '3th Year Male Representative',
    '3th Year Female Representative',
    '2th Year Male Representative',
    '2th Year Female Representative',
  ];
  aspirants = [
    {
      name: 'musa minembo',
      regNo: 'J32/335/2016',
      nickName: 'musa adrian',
      aspirantPosition: '2th Year Male Representative',
      imageUrl: '/assets/1.jpeg',
    },
    {
      name: 'Caleb chefi',
      regNo: 'J32/38899/2016',
      nickName: '',
      aspirantPosition: 'President',
      imageUrl: '/assets/2.jpeg',
    },
    {
      name: 'Amos koth',
      regNo: 'J32/98975/2016',
      nickName: 'musa adrian',
      aspirantPosition: 'Chair',
      imageUrl: '/assets/2.jpeg',
    },
    {
      name: 'Mr Hacker',
      regNo: 'J32/33599/2016',
      nickName: 'musa adrian',
      aspirantPosition: 'Chair',
      imageUrl: '/assets/3.jpeg',
    },
    {
      name: 'Kering mercy',
      regNo: 'J32/334345/2016',
      nickName: 'musa adrian',
      aspirantPosition: 'Chair',
      imageUrl: '/assets/4.jpeg',
    },
  ];

  navigateHome() {
    this.router.navigate(['']);
  }
  splitIntoArrays() {
    // @ts-ignore
    this.President = this.aspirants.filter(
      (aspirantPosition) => aspirantPosition.aspirantPosition === 'President'
    );

    // @ts-ignore
    this.VicePresident = this.aspirants.filter(
      (aspirantPosition) =>
        aspirantPosition.aspirantPosition === 'Vice President'
    );
    // @ts-ignore
    this.DeputySecretaryGeneral = this.aspirants.filter(
      (aspirantPosition) =>
        aspirantPosition.aspirantPosition === 'Deputy Secretary General'
    ); // @ts-ignore
    // @ts-ignore
    this.SecretaryGeneral = this.aspirants.filter(
      (aspirantPosition) =>
        aspirantPosition.aspirantPosition === 'Secretary General'
    ); // @ts-ignore

    this.OrganisingSecretary = this.aspirants.filter(
      (aspirantPosition) =>
        aspirantPosition.aspirantPosition === 'Organising Secretary'
    ); // @ts-ignore
    this.DeputyOrganisingSecretary = this.aspirants.filter(
      (aspirantPosition) =>
        aspirantPosition.aspirantPosition === 'Deputy Organising Secretary'
    ); // @ts-ignore
    this.Treasurer = this.aspirants.filter(
      (aspirantPosition) => aspirantPosition.aspirantPosition === 'Treasurer'
    ); // @ts-ignore
    this.OverallRepresentative = this.aspirants.filter(
      (aspirantPosition) =>
        aspirantPosition.aspirantPosition === 'Overall Representative'
    ); // @ts-ignore
    this.FrthYearMaleRepresentative = this.aspirants.filter(
      (aspirantPosition) =>
        aspirantPosition.aspirantPosition === '4th Year Male Representative'
    ); // @ts-ignore
    this.FrthYearFemaleRepresentative = this.aspirants.filter(
      (aspirantPosition) =>
        aspirantPosition.aspirantPosition === '4th Year Female Representative'
    ); // @ts-ignore
    this.ThirdthYearMaleRepresentative = this.aspirants.filter(
      (aspirantPosition) =>
        aspirantPosition.aspirantPosition === '3th Year Male Representative'
    ); // @ts-ignore
    this.ThirdYearFemaleRepresentative = this.aspirants.filter(
      (aspirantPosition) =>
        aspirantPosition.aspirantPosition === '3th Year Female Representative'
    ); // @ts-ignore
    this.SecondYearMaleRepresentative = this.aspirants.filter(
      (aspirantPosition) =>
        aspirantPosition.aspirantPosition === '2th Year Male Representative'
    );
    // @ts-ignore
    this.SecondYearFemaleRepresentative = this.aspirants.filter(
      (aspirantPosition) =>
        aspirantPosition.aspirantPosition === '2th Year Female Representative'
    );
  }
  ngOnInit(): void {
    this.splitIntoArrays();
  }
}
