import { Component } from '@angular/core';
import { GameServiceClient } from '../../../apis/ts/v1/Game_apiServiceClientPb';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  game = new GameServiceClient('');

  constructor() {
  }
}
