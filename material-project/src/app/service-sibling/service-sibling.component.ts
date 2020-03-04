import { Component } from '@angular/core';

@Component({
  selector: 'app-service-sibling',
  template: `
    <app-sibling1></app-sibling1>
    <app-sibling2></app-sibling2>
  `
})
export class ServiceSiblingComponent {}
