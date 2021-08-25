import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AspirantService } from '../../services/aspirant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-aspirants',
  templateUrl: './add-aspirants.component.html',
  styleUrls: ['./add-aspirants.component.css'],
})
export class AddAspirantsComponent implements OnInit {
  positionValue = '';
  loading = false;
  error = '';
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
  constructor(private _aspirant: AspirantService, private _route: Router) {}

  ngOnInit(): void {}
  imageFile!: File;

  async add(addAspirantForm: NgForm) {
    this.loading = true;
    this.error = '';
    const val = addAspirantForm.value;

    await this._aspirant
      .aspirantEsists(val.regNo.toUpperCase())
      .then(async (exists) => {
        if (exists) {
          this.loading = false;
          this.error = 'User alredy exists';
          return;
        } else {
          await this._aspirant
            .registerAspirant(
              val.regNo.toUpperCase(),
              val.aspirantName,
              this.imageFile,
              val.nickName,
              this.positionValue
            )
            .then((val) => {
              addAspirantForm.reset();
              this.loading = false;
            })
            .catch((err) => {
              console.log(err);
              this.loading = false;
            });
        }
      });
  }

  changed(value: any) {
    this.positionValue = value;
  }

  changeFile(event: any) {
    if (event.target?.files.length > 0) {
      this.imageFile = event.target?.files[0];
    }
  }
  navigateHome() {
    this._route.navigate(['']);
  }
}
