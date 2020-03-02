import { Component, Injector } from '@angular/core';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  routers: Routes;

  constructor(private injector: Injector) {
    this.routers = this.injector.get('routes');
  }
}
