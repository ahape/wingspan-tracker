import { Component } from '@angular/core';
import { Score } from "./score"

const scores: Score[] = [];

for (let i = 0; i < 15; i++)
  scores.push({
    victoryPoints: 0,
    eggs: 0,
    cached: 0,
    tucked: 0,
  })

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  scores = scores
  bonus = 0
  endOfRound = 0

  getPoints(): Score & { total: number } {
    const victoryPoints = scores.reduce((p, c) => p + c.victoryPoints, 0);
    const eggs = scores.reduce((p, c) => p + c.eggs, 0);
    const tucked = scores.reduce((p, c) => p + c.tucked, 0);
    const cached = scores.reduce((p, c) => p + c.cached, 0);
    return {
      victoryPoints,
      eggs,
      tucked,
      cached,
      total: victoryPoints + eggs + tucked + cached + this.bonus + this.endOfRound,
    }
  }
}
