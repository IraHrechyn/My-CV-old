import { Injectable } from '@angular/core';
import { GeneralModel } from "../types/general-model";

@Injectable({ providedIn: 'root' })
export class TimerService {
  private startTime!: number;

  constructor(private readonly m: GeneralModel) {}

  pauseTimer(): void {
    if (!this.m.isPaused) this.m.isPaused = true;
  }

  resumeTimer(): void {
    if (this.m.isPaused && !this.m.gameOver) {
      this.startTime = performance.now() - this.m.time * 1000;
      this.m.isPaused = false;
    }
  }

  updateTime(): void {
    if (!this.m.isPaused) {
      if (this.startTime === undefined) this.startTime = performance.now() - 1;
      const currentTime:number = performance.now();
      const elapsedSeconds:number = Math.floor((currentTime - this.startTime) / 1000);

      this.m.minutes = Math.floor(elapsedSeconds / 60);
      this.m.seconds = elapsedSeconds % 60;
      this.m.time = elapsedSeconds;

      this.m.timeOut = `${this.formatTime(this.m.minutes)}:${this.formatTime(this.m.seconds)}`;
    }
  }

  private formatTime(value: number): string {
    return value < 10 ? `0${value}` : value.toString();
  }
}
