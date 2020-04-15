import {Component} from '@angular/core';
import {GameServiceClient, PlayRequest, PlayResponse} from '../api';
import * as grpcWeb from 'grpc-web';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  game = new GameServiceClient('http://localhost:8080');

  constructor() {
    const req = new PlayRequest();
    req.setName('my name');
    this.game.play(
      req,
      null,
      (err: grpcWeb.Error, response: PlayResponse) => {
        console.log(response.toObject());
      });
  }
}

