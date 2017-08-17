import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{ type: 'server', name: 'Testserver', content: 'This is a Test Server' }];

  onServerAdded(severData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: severData.serverName,
      content: severData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

  changeFirstElement() {
    this.serverElements[0].name = 'changed !';
  }

  destroyFirstComponent() {
    this.serverElements.splice(0, 1);
  }
}
