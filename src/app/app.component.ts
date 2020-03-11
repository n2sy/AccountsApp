import { Component, OnInit } from '@angular/core';
import { ManageAccountsService } from './manage-accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  listeAccounts = [];
  constructor(private accService : ManageAccountsService) {

  }

  ngOnInit() {
    this.listeAccounts = this.accService.getAccounts();
  }

  AddAccount(acc) {
    this.listeAccounts.push(acc);
  }
}
