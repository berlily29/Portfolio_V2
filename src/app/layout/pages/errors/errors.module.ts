import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorsRoutingModule } from './errors-routing.module';
import { ErrorsComponent } from './errors.component';
import { Error404Component } from './error-404/error-404.component';
import { Error503Component } from './error-503/error-503.component';


@NgModule({
  declarations: [
    ErrorsComponent,
    Error404Component,
    Error503Component
  ],
  imports: [
    CommonModule,
    ErrorsRoutingModule
  ]
})
export class ErrorsModule { }
