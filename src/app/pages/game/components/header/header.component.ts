import {Component, OnInit} from '@angular/core';
import {GeneralModel} from "../../types/general-model";
import {AppConstants} from "../../types/constants";

@Component({
  selector: 'app-header-game',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderGameComponent implements OnInit{
  showInstructions: boolean = false;
  constructor(readonly m: GeneralModel) {}
  sound():void{
      const soundButton = document.querySelector('.sound');

      if (soundButton!.classList.contains('sound-on')) {
        soundButton!.classList.remove('sound-on');
        soundButton!.classList.add('sound-off');
        this.m.soundOn = false;
      } else {
        soundButton!.classList.remove('sound-off');
        soundButton!.classList.add('sound-on');
        this.m.soundOn = true;

    }
  }

  ngOnInit(): void {
    const savedBestResult = localStorage.getItem(AppConstants.localStorageRecordKey);

    if (savedBestResult !== null) {
      const { bestScore, bestTimeInt, bestTime } = JSON.parse(savedBestResult);

      this.m.bestScore = bestScore;
      this.m.bestTimeInt = bestTimeInt;
      this.m.bestTime = bestTime;
    }
  }

}
