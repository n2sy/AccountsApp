import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  DefaultGender = "female"
  constructor() { }

  ngOnInit() {
  }

  ShowFormulaire(f) {
    console.log(f)
  }

}
