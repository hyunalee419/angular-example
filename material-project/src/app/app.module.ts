import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { HelloComponent } from './hello/hello.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TimedisplayComponent } from './timedisplay/timedisplay.component';
import { TimeDisplayModule } from './timedisplay/timedisplay.module';

const appRoutes: Routes = [
  // { path: '**', component: NotFoundComponent },
  { path: '', component: HomeComponent },
  { path: 'hello', component: HelloComponent, data: { name: 'Hello' } },
  { path: 'timer', component: TimedisplayComponent, data: { name: 'Timer' } },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HelloComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
    ),
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule,
    TimeDisplayModule,
  ],
  providers: [
    { provide: 'routes', useValue: appRoutes }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
