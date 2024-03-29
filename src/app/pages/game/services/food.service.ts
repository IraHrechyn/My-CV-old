import { Injectable } from '@angular/core';
import { GeneralModel } from "../types/general-model";
import { SnakeService } from "./snake.service";
import { PositionGeneratorService } from "./position-generator.service";
import { AppConstants } from "../types/constants";

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor(
    private readonly m: GeneralModel,
    private readonly snake: SnakeService,
    private readonly positionGeneratorService: PositionGeneratorService
  ) {

    this.m.foodPosition = this.positionGeneratorService.getRandomGridPosition();
  }

  set addScore(val: number) {
    this.m.score += val;
    this.m.levelUpdate();

    if (this.m.score > this.m.bestScore || (this.m.score === this.m.bestScore && this.m.bestTimeInt > this.m.time)) {
      this.m.bestScore = this.m.score;
      this.m.bestTimeInt = this.m.time;
      this.m.bestTime = this.m.timeOut;
      this.saveBestResultLocally();
    }
  }

  private saveBestResultLocally(): void {
    localStorage.setItem(
      AppConstants.localStorageRecordKey,
      JSON.stringify({
        bestScore: this.m.bestScore,
        bestTimeInt: this.m.bestTimeInt,
        bestTime: this.m.bestTime
      })
    );
  }

  update(): void {
    if (this.snake.onSnake()) {
      this.snake.expandSnake();
      this.m.foodPosition = this.positionGeneratorService.getRandomGridPosition();
      this.addScore = 1;
      if(this.m.soundOn) this.m.eatFoodSound.play().then();
    }
  }

  draw(gameBoard:HTMLDivElement): void {
    const foodElement:HTMLDivElement = document.createElement('div');
    foodElement.style.gridRowStart = this.m.foodPosition.y.toString();
    foodElement.style.gridColumnStart = this.m.foodPosition.x.toString();
    foodElement.classList.add('food');
    gameBoard.appendChild(foodElement);
  }
}
