import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servers = [{type: 'server',name: 'Server Name',content: 'Server Content'}];

  onServerAdded(serverInfo: {newServername: string, newServercontent: string}) {
    this.servers.push({
      type: 'server',
      name: serverInfo.newServername,
      content: serverInfo.newServercontent
    })
  }

   onBpAdded(blueprintInfo: {newServername: string, newServercontent: string}) {
    this.servers.push({
      type: 'blueprint',
      name: blueprintInfo.newServername,
      content: blueprintInfo.newServercontent
    })
   }
}
