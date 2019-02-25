import { Component, OnInit } from '@angular/core';
import { PatientsService } from './patients.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PatientsService]
})
export class AppComponent implements OnInit {
  patients: {fname: string, lname: string, ailment: string}[] = [];
  constructor(private patientsService: PatientsService) {  }

  ngOnInit() {
    this.patients = this.patientsService.patients;
  }
}
