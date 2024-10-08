import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule)
  },
  {
    path: 'errors',
    loadChildren: () => import('./layout/pages/errors/errors.module').then(m => m.ErrorsModule) 
  },
  {
    path: '**', 
    redirectTo: 'errors/404',
    pathMatch:'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  { 
    // scrollPositionRestoration: 'enabled', // Restores scroll position on navigation
    anchorScrolling: 'enabled',           // Enables anchor (fragment) scrolling
    scrollOffset: [0, 90]                 // Adjust this if you have a fixed navbar
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
