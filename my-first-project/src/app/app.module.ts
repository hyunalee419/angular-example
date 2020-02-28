import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { AppComponent } from './app.component';
import { MTodolistComponent } from './m-todolist/m-todolist.component';
import { TimedisplayComponent } from './timedisplay/timedisplay.component';
import { TimeDisplayModule } from './timedisplay/timedisplay.module';
import { TodolistComponent } from './todolist/todolist.component';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    MTodolistComponent,
    TimedisplayComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule, MatIconModule, MatInputModule, MatListModule,

    TimeDisplayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
