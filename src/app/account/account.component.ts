import { Component, OnInit, Input } from '@angular/core';
import { ManageAccountsService } from '../manage-accounts.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  @Input() account;
  @Input() id;
  constructor(private accService : ManageAccountsService,
    private logging : LoggingService) { }

  ngOnInit() {
  }

  SetStatus(newStatus) {
    this.accService.ChangeStatus(this.id, newStatus);
    //this.logging.showConsole(newStatus);
    //console.log("Status has been changed : ", newStatus);
    //this.account.statut = newStatus;
  }

}
