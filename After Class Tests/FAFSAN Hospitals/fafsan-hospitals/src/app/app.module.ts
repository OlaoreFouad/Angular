import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PatientsComponent } from './patients/patients.component';
import { NewPatientsComponent } from './new-patients/new-patients.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientsComponent,
    NewPatientsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
