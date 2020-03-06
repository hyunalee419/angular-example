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
    this.routers = this.forIterable(routes);
  }

  forIterable(routes: Routes) {
    const obj = [];
    for (const route of routes) {
      if (route.children) {
        route.children = this.forIterable(route.children);
      }
      if (route.path && route.data) {
        obj.push(route);
      }
    }
    return obj;
  }
}
