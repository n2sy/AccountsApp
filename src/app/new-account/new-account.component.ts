import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {
  @Output() sendAcc = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  AddNewAccount(n, s) {
    this.sendAcc.emit(
      {
        name : n,
        statut : s
      }
    )
  }

}
