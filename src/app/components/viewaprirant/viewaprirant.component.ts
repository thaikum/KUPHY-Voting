import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AspirantService } from '../../services/aspirant.service';

@Component({
  selector: 'app-viewaprirant',
  templateUrl: './viewaprirant.component.html',
  styleUrls: ['./viewaprirant.component.css'],
})
export class ViewaprirantComponent implements OnInit {
  constructor(private router: Router, private _asp: AspirantService) {}

  President: any = '';
  VicePresident: any = '';
  SecretaryGeneral: any = '';
  DeputySecretaryGeneral: any = '';
  OrganisingSecretary: any = '';
  DeputyOrganisingSecretary: any = '';
  Treasurer: any = '';
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
  aspirants: any = [];

  navigateHome() {
    this.router.navigate(['']);
  }
  splitIntoArrays() {
    // @ts-ignore
    this.President = this.aspirants.filter(
      (aspirantPosition: { aspirantPosition: string }) =>
        aspirantPosition.aspirantPosition === 'President'
    );

    // @ts-ignore
    this.VicePresident = this.aspirants.filter(
      (aspirantPosition: { aspirantPosition: string }) =>
        aspirantPosition.aspirantPosition === 'Vice President'
    );
    // @ts-ignore
    this.DeputySecretaryGeneral = this.aspirants.filter(
      (aspirantPosition: { aspirantPosition: string }) =>
        aspirantPosition.aspirantPosition === 'Deputy Secretary General'
    ); // @ts-ignore
    // @ts-ignore
    this.SecretaryGeneral = this.aspirants.filter(
      (aspirantPosition: { aspirantPosition: string }) =>
        aspirantPosition.aspirantPosition === 'Secretary General'
    ); // @ts-ignore

    this.OrganisingSecretary = this.aspirants.filter(
      (aspirantPosition: { aspirantPosition: string }) =>
        aspirantPosition.aspirantPosition === 'Organising Secretary'
    ); // @ts-ignore
    this.DeputyOrganisingSecretary = this.aspirants.filter(
      (aspirantPosition: { aspirantPosition: string }) =>
        aspirantPosition.aspirantPosition === 'Deputy Organising Secretary'
    ); // @ts-ignore
    this.Treasurer = this.aspirants.filter(
      (aspirantPosition: { aspirantPosition: string }) =>
        aspirantPosition.aspirantPosition === 'Treasure'
    ); // @ts-ignore
    this.OverallRepresentative = this.aspirants.filter(
      (aspirantPosition: { aspirantPosition: string }) =>
        aspirantPosition.aspirantPosition === 'Overall Representative'
    ); // @ts-ignore
    this.FrthYearMaleRepresentative = this.aspirants.filter(
      (aspirantPosition: { aspirantPosition: string }) =>
        aspirantPosition.aspirantPosition === '4th Year Male Representative'
    ); // @ts-ignore
    this.FrthYearFemaleRepresentative = this.aspirants.filter(
      (aspirantPosition: { aspirantPosition: string }) =>
        aspirantPosition.aspirantPosition === '4th Year Female Representative'
    ); // @ts-ignore
    this.ThirdthYearMaleRepresentative = this.aspirants.filter(
      (aspirantPosition: { aspirantPosition: string }) =>
        aspirantPosition.aspirantPosition === '3th Year Male Representative'
    ); // @ts-ignore
    this.ThirdYearFemaleRepresentative = this.aspirants.filter(
      (aspirantPosition: { aspirantPosition: string }) =>
        aspirantPosition.aspirantPosition === '3th Year Female Representative'
    ); // @ts-ignore
    this.SecondYearMaleRepresentative = this.aspirants.filter(
      (aspirantPosition: { aspirantPosition: string }) =>
        aspirantPosition.aspirantPosition === '2th Year Male Representative'
    );
    // @ts-ignore
    this.SecondYearFemaleRepresentative = this.aspirants.filter(
      (aspirantPosition: { aspirantPosition: string }) =>
        aspirantPosition.aspirantPosition === '2th Year Female Representative'
    );
  }

  getAspirants(): void {
    this._asp.getAllAspirants().subscribe((aspirants) => {
      this.aspirants = aspirants;
      this.splitIntoArrays();
    });
  }

  ngOnInit(): void {
    this.getAspirants();
  }
}
