import { ConsoleService } from './../console.service';
import { Component, OnInit, Input } from '@angular/core';
import { PatientsService } from './../patients.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css'],
  providers: [ConsoleService]
})
export class PatientsComponent implements OnInit {
  @Input() patient: {fname: string, lname: string, ailment: string};
  @Input() id: number;
  constructor(private patientsService: PatientsService, private loggingService: ConsoleService) { }

  onSetAs(ailment: string) {
    this.patientsService.updateAilment(ailment, this.id);
    this.loggingService.logAilment(ailment, this.id);
  }

  ngOnInit() {
  }

}
