import { Injectable } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class ManageAccountsService {
  listeAccounts = [
    {
      name : "Master Account",
      statut : "active"
    },
    {
      name : "Admin Account",
      statut : "inactive"
    }

  ];
  constructor(private logging : LoggingService) { }

  getAccounts() {
    return this.listeAccounts;
  }

  AddAccount(acc) {
    this.listeAccounts.push(acc)
  }

  ChangeStatus(id, newStatus) {
    this.listeAccounts[id].statut = newStatus;
    this.logging.showConsole(newStatus);
  }
}
