import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-button-layout',
  templateUrl: './button-layout.component.html'
})
export class ButtonLayoutComponent implements OnInit {
  @Output() clickEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  clickButton(command: string) {
    this.clickEvent.emit(command);
  }
}
