import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
})
export class TimeComponent implements OnInit {
  @Input() minute: number;
  @Input() second: number;
  @Input() millisecond: number;


  constructor() { }

  ngOnInit(): void {
  }
}
