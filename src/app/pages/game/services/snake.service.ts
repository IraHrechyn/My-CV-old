import { Injectable } from '@angular/core';
import { GeneralModel } from "../types/general-model";
import { InputService } from "./input.service";
import { ObstaclesService } from "./obstacles.service";
import { Position } from "../types/position.interface";

@Injectable({
  providedIn: 'root',
})
export class SnakeService {
  private newSegments: number = 0;

  constructor(
    private readonly m: GeneralModel,
    private readonly input: InputService,
    private readonly obstacles: ObstaclesService
  ) {
  }

  listenToInputs(): void {
    this.input.getInputs();
  }

  update(): void {
    this.moveSnakeBody();
    this.updateSnakeHead();
    this.checkSnakeIntersection();
  }

  draw(gameBoard: any): void {
    const snakeElements = document.querySelectorAll('.snake');
    snakeElements.forEach((element: Element) => element.remove());

    this.drawSnakeElement(gameBoard, this.m.snakeBody[0], 'head', this.m.headTurn);

    for (let i = 1; i < this.m.snakeBody.length; i++) {
      this.drawSnakeElement(gameBoard, this.m.snakeBody[i]);
    }
  }

   drawSnakeElement(gameBoard: any, position: Position, type: string = 'body', rotation: number = 0): void {
    const snakeElement: HTMLDivElement = document.createElement('div');
    snakeElement.style.gridRowStart = position.y.toString();
    snakeElement.style.gridColumnStart = position.x.toString();
    snakeElement.classList.add('snake', type);

    if (type === 'head') {
      snakeElement.style.transform = `rotate(${rotation}deg)`;
      snakeElement.style.zIndex = '2';
    }

    gameBoard.appendChild(snakeElement);
  }

  private addSegments(): void {
    for (let i = 0; i < this.newSegments; i++) this.m.snakeBody.push({...this.m.snakeBody[this.m.snakeBody.length - 1]});
    this.newSegments = 0;
  }

  private moveSnakeBody(): void {
    this.addSegments();
    for (let i: number = this.m.snakeBody.length - 1; i > 0; i--) {
      this.m.snakeBody[i] = {...this.m.snakeBody[i - 1]};
    }
  }

  expandSnake(): void {
    this.newSegments += 1;
  }

 private snakeIntersection(): number {
    for (let i: number = 1; i < this.m.snakeBody.length; i++) {
      if (this.equalPositions(this.m.snakeBody[0], this.m.snakeBody[i])) return i;
    }
    return 0;
  }

  onSnake(): boolean {
    return this.m.snakeBody.some((segment: Position) => {return this.equalPositions(segment, this.m.foodPosition);});
  }

 private equalPositions(pos1: Position, pos2: Position): boolean {
    return pos1.x === pos2.x && pos1.y === pos2.y;
  }

  private updateSnakeHead(): void {
    const inputDirection: Position = this.input.getInputDirection();
    const newHeadX: number = ((this.m.snakeBody[0].x + inputDirection.x + this.m.cellsInRow - 1) % this.m.cellsInRow) + 1;
    const newHeadY: number = ((this.m.snakeBody[0].y + inputDirection.y + this.m.cellsInColumn - 1) % this.m.cellsInColumn) + 1;
    if ((this.m.level < 5 && this.outsideGrid(this.m.snakeBody[0], {x: newHeadX, y: newHeadY})) ||
      this.obstacles.checkObstacleCollision(this.m.snakeBody[0])) this.m.gameOver = true;
    this.m.snakeBody[0] = {x: newHeadX, y: newHeadY};

  }

  private outsideGrid(position1: Position, position2: Position): boolean {
    return (
      (position1.x === 1 && position2.x === this.m.cellsInRow) ||
      (position1.x === this.m.cellsInRow && position2.x === 1) ||
      (position1.y === 1 && position2.y === this.m.cellsInColumn) ||
      (position1.y === this.m.cellsInColumn && position2.y === 1)

    );
  }

  private checkSnakeIntersection(): void {
    const intersectionIndex: number = this.snakeIntersection();
    if (intersectionIndex) {
      const segmentsToRemove: number = this.m.snakeBody.length - intersectionIndex;

      this.m.score -= segmentsToRemove;
      this.m.level = Math.max(1, Math.floor(this.m.score / 10) + 1);

      this.m.snakeBody.splice(Number(intersectionIndex));

      this.m.levelUpdate();
    }
  }
}
