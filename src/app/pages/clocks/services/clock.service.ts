import {ClockData} from "../types/clock-data.interface";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class ClockService {
  private _currentTime: ClockData = {
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  constructor() {
    this.setCurrentTime();
  }
  startClock(): any{
    return setInterval(() => (this.setCurrentTime()), 1000);
  }

  get currentTime(): ClockData {
    return this._currentTime;

  }

  private get getTime(): ClockData {
    const currentTime = new Date();
    return {
      hours: currentTime.getHours(),
      minutes: currentTime.getMinutes(),
      seconds: currentTime.getSeconds(),
    };
  }

  private setCurrentTime():void{
    this._currentTime = this.getTime;
  }
}
