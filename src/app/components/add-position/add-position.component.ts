import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-position',
  templateUrl: './add-position.component.html',
  styleUrls: ['./add-position.component.css'],
})
export class AddPositionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  addPositon(positionForm: NgForm) {}
}
