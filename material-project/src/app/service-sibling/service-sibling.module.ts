import { NgModule } from '@angular/core';
import { ServiceSiblingService } from './service-sibling.service';
import { Sibling1Component } from './sibling1.component';
import { Sibling2Component } from './sibling2.component';
import { ServiceSiblingComponent } from './service-sibling.component';

@NgModule({
  declarations: [
    ServiceSiblingComponent,
    Sibling1Component,
    Sibling2Component
  ],
  exports: [
    ServiceSiblingComponent,
    Sibling1Component,
    Sibling2Component
  ],
  providers: [
    { provide: ServiceSiblingService, useValue: ServiceSiblingService }
  ]
})
export class ServiceSiblingModule { }
