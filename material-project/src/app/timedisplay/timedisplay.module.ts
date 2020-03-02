import { NgModule } from '@angular/core';
import { ButtonLayoutComponent } from './button-layout/button-layout.component';
import { TimeComponent } from './time/time.component';
import { TimedisplayComponent } from './timedisplay.component';

@NgModule({
  declarations: [
    ButtonLayoutComponent,
    TimeComponent,
    TimedisplayComponent
  ],
  exports: [
    ButtonLayoutComponent,
    TimeComponent,
    TimedisplayComponent
  ],
})
export class TimeDisplayModule { }
