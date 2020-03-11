import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { AccountComponent } from './account/account.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    NewAccountComponent,
    AccountComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
