import { Input, Component, OnInit } from '@angular/core';
import { Score } from "../score"
import birds from "../birds"

@Component({
  selector: '[app-card]',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() score!: Score

  birdOptions = [birds[0]].concat(birds.filter(b => b.Expansion === "originalcore"))

  onBirdChange(event: Event) {
    const val = (event.target as HTMLInputElement).value
    const bird = this.birdOptions.find(x => x["Common name"] === val)
    if (bird)
      this.score.victoryPoints = bird["Victory points"] ?? 0
  }

  onEggsUpdate(up: boolean) {
    if (up)
      this.score.eggs++
    else
      this.score.eggs--
  }

  onTuckedUpdate(up: boolean) {
    if (up)
      this.score.tucked++
    else
      this.score.tucked--
  }

  onCachedUpdate(up: boolean) {
    if (up)
      this.score.tucked++
    else
      this.score.tucked--
  }
}
