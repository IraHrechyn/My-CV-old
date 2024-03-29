import { Injectable } from '@angular/core';
import {GeneralModel} from "../types/general-model";
import {PositionGeneratorService} from "./position-generator.service";
import {Position} from "../types/position.interface";

@Injectable({
  providedIn: 'root',
})
export class ObstaclesService {
  constructor(private readonly m: GeneralModel, private readonly positionGeneratorService: PositionGeneratorService) {}

  update(): void {
    while (this.m.obstacles.length < this.m.requiredObstacles) this.generateAndAddObstacle();
    while (this.m.obstacles.length > this.m.requiredObstacles) this.m.obstacles.pop();
  }

  draw(gameBoard: HTMLDivElement): void {
    this.m.obstacles.forEach((position:Position):void => {
      const obstacleElement:HTMLDivElement = document.createElement('div');
      obstacleElement.style.gridRowStart = position.y.toString();
      obstacleElement.style.gridColumnStart = position.x.toString();
      obstacleElement.classList.add('obstacle');
      gameBoard.appendChild(obstacleElement);
    });
  }

 private generateAndAddObstacle(): void {
    this.m.obstacles.push(this.positionGeneratorService.getRandomGridPosition());
  }

  checkObstacleCollision(position: Position): boolean {
    return this.m.obstacles.some((obstacle:Position) => obstacle.x === position.x && obstacle.y === position.y);
  }
}
