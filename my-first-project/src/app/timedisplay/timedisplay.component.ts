import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timedisplay',
  templateUrl: './timedisplay.component.html',
})
export class TimedisplayComponent implements OnInit {
  timer;
  minute: number;
  second: number;
  millisecond: number;

  constructor() { }

  ngOnInit(): void {
    this.minute = 0;
    this.second = 0;
    this.millisecond = 0;
  }

  setStart() {

    this.timer = setInterval(() => {
      this.millisecond += 1;
      if (this.millisecond >= 100) {
        this.millisecond = 0;
        this.second += 1;
      }
      if (this.second >= 60) {
        this.second = 0;
        this.minute += 1;
      }
    }, 10);
  }

  setStop() {
    clearInterval(this.timer);
  }

  setReset() {
    this.minute = 0;
    this.second = 0;
    this.millisecond = 0;
    this.setStop();
  }

  onClickButton(command: string) {
    switch (command) {
      case 'start':
        this.setStart();
        break;
      case 'stop':
        this.setStop();
        break;
      case 'reset':
        this.setReset();
        break;
    }
  }
}
