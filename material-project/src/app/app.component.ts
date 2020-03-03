import { Component, Inject } from '@angular/core';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  routers: Routes;

  constructor(@Inject('routes') private routes: Routes) {
    this.routers = routes;
  }
}
