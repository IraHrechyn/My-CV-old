export class AppConstants {
  static readonly containerSelector = '.game-board';
  static readonly localStorageRecordKey = 'record';
  static readonly classBlur = 'blur';

  // static  gridSizeX = 25;
  // static  gridSizeY = 11;

  static readonly keyToDirection: Readonly<Record<string, string>> = Object.freeze({
    ArrowUp: 'ArrowUp',
    KeyW: 'ArrowUp',
    ArrowDown: 'ArrowDown',
    KeyS: 'ArrowDown',
    ArrowLeft: 'ArrowLeft',
    KeyA: 'ArrowLeft',
    ArrowRight: 'ArrowRight',
    KeyD: 'ArrowRight',
    Space: 'Space',
    KeyR: 'KeyR',
  });


}
