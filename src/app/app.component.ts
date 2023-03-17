import { Component, OnInit, VERSION } from '@angular/core';
import { GameService } from 'src/services/game.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  puzzle: string[][] = [];

  constructor(private gameService: GameService) {}

  async ngOnInit() {
    this.puzzle = await this.gameService.generatePuzzle();
  }

  // Add methods for handling user input, such as selecting letters and submitting words.
}
