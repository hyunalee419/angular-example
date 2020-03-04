import { Component } from '@angular/core';
import { ServiceSiblingService } from './service-sibling.service';

@Component({
  selector: 'app-sibling1',
  template: `
    <h2>Sibling-1</h2>
    <p>message: {{ message }}</p>
    <input type="text"
           (input)="message = $event.target.value"
           placeholder="message">
  `,
  styles: [`
    :host {
      display: block;
      padding: 10px;
      background-color: antiquewhite;
    }
  `]
})
export class Sibling1Component {
  constructor(private dataService: ServiceSiblingService) {}

  get message(): string {
    return this.dataService.message;
  }

  set message(newMessage: string) {
    this.dataService.message = newMessage;
  }
}
