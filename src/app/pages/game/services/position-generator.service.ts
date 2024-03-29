import { Injectable } from '@angular/core';
import {GeneralModel} from "../types/general-model";
import {Position} from "../types/position.interface";

@Injectable({ providedIn: 'root' })
export class PositionGeneratorService {
  private readonly excludeRadius: number = 5;

  constructor(private readonly m: GeneralModel) {}


  getRandomGridPosition(): Position {
    let newPosition: Position;
    do newPosition = this.generateRandomPosition();
    while (this.isInvalidPosition(newPosition));
    return newPosition;
  }

  private generateRandomPosition(): Position {
    return {
      x: Math.floor(Math.random() * this.m.maxX) + 1,
      y: Math.floor(Math.random() * this.m.maxY) + 1,
    };
  }

  private isInvalidPosition(position: Position): boolean {
    return (
      this.isOccupiedPosition(position, [this.m.snakeBody[0]], this.excludeRadius) ||
      this.isOccupiedPosition(position, this.m.snakeBody) ||
      this.isOccupiedPosition(position, this.m.obstacles) ||
      this.isOccupiedPosition(position, [this.m.foodPosition])
    );
  }

  private isOccupiedPosition(
    position: Position,
    elements: Position[],
    excludeRadius: number = 0,
  ): boolean {
    return elements.some(
      (element:Position) =>
        Math.abs(element.x - position.x) <= excludeRadius &&
        Math.abs(element.y - position.y) <= excludeRadius);
  }
}
