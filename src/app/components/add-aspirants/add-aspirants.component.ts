import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AspirantService } from '../../services/aspirant.service';

@Component({
  selector: 'app-add-aspirants',
  templateUrl: './add-aspirants.component.html',
  styleUrls: ['./add-aspirants.component.css'],
})
export class AddAspirantsComponent implements OnInit {
  value = '';
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
  constructor(private _aspirant: AspirantService) {}

  ngOnInit(): void {}

  async add(addAspirantForm: NgForm) {
    this.loading = true;
    const val = addAspirantForm.value;
    console.log(val);

    await this._aspirant.getAspirantByReg(val.regNo).subscribe((v) => {
      if (!!v.docId) {
        this.error = 'user not registered';
        return;
      }

      this._aspirant
        .registerAspirant(v.docId, val.profilePic, val.nickName, this.value)
        .then((val) => {
          console.log('error');
          this.loading = false;
        })
        .catch((err) => {
          console.log(err);
          this.error = err.message;
          this.loading = false;
        });
    });
  }

  changed(value: any) {
    this.value = value;
  }
}
