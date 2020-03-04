import { NgModule } from '@angular/core';
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
import { TimedisplayComponent } from './timedisplay/timedisplay.component';
import { TimeDisplayModule } from './timedisplay/timedisplay.module';
import { NotFoundComponent } from './notfound/notfound.component';
import { ServiceSiblingComponent } from './service-sibling/service-sibling.component';
import { ServiceSiblingModule } from './service-sibling/service-sibling.module';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'hello', component: HelloComponent, data: { name: 'Hello' } },
  { path: 'timer', component: TimedisplayComponent, data: { name: 'Timer' } },
  { path: 'service-sibling', component: ServiceSiblingComponent, data: { name: 'Service - 공유 데이터 테스트' } },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HelloComponent,
    NotFoundComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
    ),
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule,
    TimeDisplayModule,
    ServiceSiblingModule,
  ],
  providers: [
    { provide: 'routes', useValue: appRoutes }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
