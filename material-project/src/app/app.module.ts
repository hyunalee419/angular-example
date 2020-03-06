import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HelloComponent } from './hello/hello.component';
import { LifeCycleComponent } from './lifecycle/lifecycle.component';
import { TimedisplayComponent } from './timedisplay/timedisplay.component';
import { TimeDisplayModule } from './timedisplay/timedisplay.module';
import { NotFoundComponent } from './notfound/notfound.component';
import { ServiceSiblingComponent } from './service-sibling/service-sibling.component';
import { ServiceSiblingModule } from './service-sibling/service-sibling.module';
import { Observable1Component } from './observable/observable1.component';
import { Observable2EventHttpComponent } from './observable/observable2.component';
import { MatTreeModule } from '@angular/material/tree';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'hello', component: HelloComponent, data: { name: 'Hello' } },
  { path: 'lifecycle', component: LifeCycleComponent, data: { name: '생명주기' } },
  { path: 'timer', component: TimedisplayComponent, data: { name: 'Timer' } },
  { path: 'service-sibling', component: ServiceSiblingComponent, data: { name: 'Service - 공유 데이터 테스트' } },
  { path: 'observables',
    children: [
      { path: '1', component: Observable1Component, data: { name: '옵저버1' }},
      { path: '2', component: Observable2EventHttpComponent, data: { name: '옵저버2' }},
      { path: '', redirectTo: '1', pathMatch: 'full' },
    ],
    data: { name: 'observables' },
  },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HelloComponent,
    LifeCycleComponent,
    Observable1Component,
    Observable2EventHttpComponent,
    NotFoundComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
    ),
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,

    MatButtonModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule, MatTreeModule,

    TimeDisplayModule,
    ServiceSiblingModule,
  ],
  providers: [
    { provide: 'routes', useValue: appRoutes }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
