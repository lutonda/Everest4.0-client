import { BackofficeComponent } from './backoffice/backoffice/backoffice.component';
import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

const routes: Routes =[
  {
    path: '',
    redirectTo: 'me/dashboard',
    pathMatch: 'full',
  }, {
    path: 'me',
    component: AdminLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  }]}, {
    path: 'backoffice',
    component: BackofficeComponent,
    children: [
        {
      path: '',
      loadChildren: './backoffice/backoffice.module#BackofficeModule'
  }]}
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
