import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { FooterComponent } from './footer/footer.component';
import { TopnavbarComponent } from './topnavbar/topnavbar.component';


@NgModule({
  declarations: [FooterComponent,TopnavbarComponent],
  imports: [
    CommonModule,
    ComponentsRoutingModule
  ],
  exports: [FooterComponent,TopnavbarComponent]
})
export class ComponentsModule { }
