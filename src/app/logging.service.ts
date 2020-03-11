import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }

  showConsole(newStatus) {
    console.log("Status has been changed : ", newStatus);  }
}
