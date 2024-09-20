import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { TopnavbarComponent } from './components/topnavbar/topnavbar.component';
import { ComponentsModule } from './components/components.module';



@NgModule({
  declarations: [
    LayoutComponent,
    
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    ComponentsModule
  ],
  exports: [
    LayoutComponent,
  ]
})
export class LayoutModule { }
