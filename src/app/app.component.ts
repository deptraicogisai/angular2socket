import { Component } from '@angular/core';
import * as io from 'socket.io-client'

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'app works!';
  socket = null;
  message = "";
  constructor() {
    this.socket = io('http://localhost:8000');

    this.socket.on('message', function (data) {
      this.message = data.message;
    }.bind(this));
  }
}
