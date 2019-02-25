import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
    addNewServer = false;
    serverCreation = "";
    serverName = "";
    serverCreated = false;
    servers  = ['Fouad', 'Ewaoluwa'];
  constructor() {
    setTimeout(() => {
      this.addNewServer = true;
    }, 2000);
  }

  createServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreation = `Server ${ this.serverName } was created!,.`;
  }

  updateServer(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }


  ngOnInit() {
  }

}
