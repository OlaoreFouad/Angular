import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output('server') serverCreated = new EventEmitter<{newServername: string, newServercontent: string}>();
  @Output('blueprint') blueprintCreated = new EventEmitter<{newServername: string, newServercontent: string}>();

  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  serverName = '';
  serverContent = '';

  addNewServer(nameInput, contentInput) {
    this.serverCreated.emit({
      newServername: nameInput.value,
      newServercontent: this.serverContentInput.nativeElement.value
      })
  }

   addServerBp(nameInput) {
    this.blueprintCreated.emit({
      newServername: nameInput.value, 
      newServercontent: this.serverContentInput.nativeElement.value
    })
   }
   constructor() { }

  ngOnInit() {
  }

}
