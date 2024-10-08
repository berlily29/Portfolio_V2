import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { WorksComponent } from './works/works.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ComponentsModule } from '../components/components.module';
import { LayoutModule } from '../layout.module';
@NgModule({
  declarations: [HomeComponent, WorksComponent, ContactComponent, AboutComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ReactiveFormsModule,
    ComponentsModule
    ],
})
export class PagesModule { }
