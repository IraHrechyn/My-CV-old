import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { Position } from "./position.interface";

@Injectable({
  providedIn: 'root',
})
export class GeneralModel {
  readonly eatFoodSound: HTMLAudioElement = new Audio('assets/eating.mp3');
  readonly deathSound: HTMLAudioElement = new Audio('assets/game-over.mp3');
  private _timerSubscription!: Subscription;
  private _lastRenderTime: number = 0;
  private _requiredObstacles: number = 0;
  private _gameBoard!: HTMLDivElement;
  private _soundOn: boolean = true;
  private _baseSpeed: number = 2;

  private _score: number = 0;
  private _bestScore: number = 0;

  private _time: number = 0;
  private _timeOut: string = '00:00';
  private _minutes: number = 0;
  private _seconds: number = 0;
  private _bestTimeInt: number = 0;
  private _bestTime: string = '00:00';

  private _headTurn: number = 0;

  private _foodPosition: Position = { x: 5, y: 5 };
  private _snakeBody: Position[] = [{ x: 13, y: 6 }];

  private _obstacles: Position[] = [];

  private _level: number = 1;
  private _isPaused: boolean = false;
  private _gameOver: boolean = false;
  private _modalVisible: boolean = false;

  private _cellsInRow: number = 0;
  private _cellsInColumn: number = 0;
  private _widthBoard: number = 0;
  private _heightBoard: number = 0;

  private _maxX: number = 1;
  private _maxY: number = 1;

  private _gridColumnTemplate: string = '';
  private _gridRowTemplate: string = '';

  private _gridSizeX: number = 25;
  private _gridSizeY: number = 11;

  get maxX(): number {
    return this._maxX;
  }

  set maxX(value: number) {
    this._maxX = value;
  }

  get maxY(): number {
    return this._maxY;
  }

  set maxY(value: number) {
    this._maxY = value;
  }
  get gridColumnTemplate(): string {
    return this._gridColumnTemplate;
  }

  set gridColumnTemplate(value: string) {
    this._gridColumnTemplate = value;
  }

  get cellsInRow(): number {
    return this._cellsInRow;
  }

  set cellsInRow(value: number) {
    this._cellsInRow = value;
  }

  get cellsInColumn(): number {
    return this._cellsInColumn;
  }

  set cellsInColumn(value: number) {
    this._cellsInColumn = value;
  }
  get gridRowTemplate(): string {
    return this._gridRowTemplate;
  }

  set gridRowTemplate(value: string) {
    this._gridRowTemplate = value;
  }

  get heightBoard(): number {
    return this._heightBoard-9;
  }

  set heightBoard(value: number) {
    this._heightBoard = value;
  }

  get widthBoard(): number {
    return this._widthBoard-9;
  }

  set widthBoard(value: number) {
    this._widthBoard = value;
  }

  get gridSizeY(): number {
    return this._gridSizeY;
  }

  set gridSizeY(value: number) {
    this._gridSizeY = value;
  }

  get gridSizeX(): number {
    return this._gridSizeX;
  }

  set gridSizeX(value: number) {
    this._gridSizeX = value;
  }

  get timerSubscription(): Subscription {
    return this._timerSubscription;
  }

  set timerSubscription(value: Subscription) {
    this._timerSubscription = value;
  }

  get lastRenderTime(): number {
    return this._lastRenderTime;
  }

  set lastRenderTime(value: number) {
    this._lastRenderTime = value;
  }

  get requiredObstacles(): number {
    return this._requiredObstacles;
  }

  set requiredObstacles(value: number) {
    this._requiredObstacles = value;
  }

  get gameBoard(): HTMLDivElement {
    return this._gameBoard;
  }

  set gameBoard(value: HTMLDivElement) {
    this._gameBoard = value;
  }

  get soundOn(): boolean {
    return this._soundOn;
  }

  set soundOn(value: boolean) {
    this._soundOn = value;
  }

  get baseSpeed(): number {
    return this._baseSpeed;
  }

  get score(): number {
    return this._score;
  }

  set score(value: number) {
    this._score = value;
  }

  get bestScore(): number {
    return this._bestScore;
  }

  set bestScore(value: number) {
    this._bestScore = value;
  }

  get time(): number {
    return this._time;
  }

  set time(value: number) {
    this._time = value;
  }

  get timeOut(): string {
    return this._timeOut;
  }

  set timeOut(value: string) {
    this._timeOut = value;
  }

  get minutes(): number {
    return this._minutes;
  }

  set minutes(value: number) {
    this._minutes = value;
  }

  get seconds(): number {
    return this._seconds;
  }

  set seconds(value: number) {
    this._seconds = value;
  }

  get bestTimeInt(): number {
    return this._bestTimeInt;
  }

  set bestTimeInt(value: number) {
    this._bestTimeInt = value;
  }

  get bestTime(): string {
    return this._bestTime;
  }

  set bestTime(value: string) {
    this._bestTime = value;
  }

  get headTurn(): number {
    return this._headTurn;
  }

  set headTurn(value: number) {
    this._headTurn = value;
  }

  get foodPosition(): Position {
    return this._foodPosition;
  }

  set foodPosition(value: Position) {
    this._foodPosition = value;
  }

  get snakeBody(): Position[] {
    return this._snakeBody;
  }


  get obstacles(): Position[] {
    return this._obstacles;
  }

  get level(): number {
    return this._level;
  }

  set level(value: number) {
    if (value >= 2) this.requiredObstacles = value;
    else this.requiredObstacles = 0;

    this._level = value;
  }

  get isPaused(): boolean {
    return this._isPaused;
  }

  set isPaused(value: boolean) {
    this._isPaused = value;
  }

  get gameOver(): boolean {
    return this._gameOver;
  }

  set gameOver(value: boolean) {
    this._gameOver = value;
    if (value) this.isPaused = true;
  }

  get modalVisible(): boolean {
    return this._modalVisible;
  }

  set modalVisible(value: boolean) {
    this._modalVisible = value;
  }

  get snakeSpeed(): number {
    return this.level < 10 ? this.baseSpeed + this.level : this.baseSpeed + 10;
  }

  levelUpdate(): void {
    this.level = Math.ceil(this.score / 10);
  }

  restart(): void {
    window.location.reload();
  }

  setGridSize() {
    const desiredCellSize = 44;
    this.cellsInRow = Math.floor( this.widthBoard / desiredCellSize);
    this.cellsInColumn = Math.floor(this.heightBoard / desiredCellSize);

    this.gridSizeX = this.widthBoard / this.cellsInRow;
    this.gridSizeY = this.heightBoard / this.cellsInColumn;

    this.gridColumnTemplate = `repeat(${this.cellsInRow}, ${this.gridSizeX}px)`;
    this.gridRowTemplate = `repeat(${this.cellsInColumn}, ${this.gridSizeY}px)`;
  }

}
