import { NgModule } from '@angular/core';
import { ButtonLayoutComponent } from './button-layout/button-layout.component';
import { TimeComponent } from './time/time.component';

@NgModule({
  declarations: [
    ButtonLayoutComponent,
    TimeComponent
  ],
  exports: [
    ButtonLayoutComponent,
    TimeComponent
  ],
})
export class TimeDisplayModule { }
