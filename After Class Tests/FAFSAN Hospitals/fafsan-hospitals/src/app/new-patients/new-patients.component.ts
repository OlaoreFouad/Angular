import { ConsoleService } from './../console.service';
import { Component, OnInit } from '@angular/core';
import { PatientsService } from './../patients.service';

@Component({
  selector: 'app-new-patients',
  templateUrl: './new-patients.component.html',
  styleUrls: ['./new-patients.component.css'],
  providers: [ConsoleService]
})
export class NewPatientsComponent implements OnInit {
  constructor(private patientsService: PatientsService, private loggingService: ConsoleService) { }

  addPatient(fn: string, ln: string, ailment: string) {
    this.patientsService.addPatient(fn, ln, ailment);
    this.loggingService.logPatient(fn);
  }

  ngOnInit() {
  }

}
