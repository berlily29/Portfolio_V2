import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './error-404/error-404.component';
import { Error503Component } from './error-503/error-503.component';

const routes: Routes = [

  {
    path: '404',
    component: Error404Component
  },
  {
    path: '503',
    component: Error503Component
  },
  {
    path: '',
    redirectTo: '404',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorsRoutingModule { }
