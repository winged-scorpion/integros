import { Component, OnInit } from '@angular/core';

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from "./auth-guard.service";

const loginStatus =  localStorage.getItem('login')
let redirect;
if(loginStatus){
  redirect = 'home'
}else{
  redirect = 'authorization'
}
const routes: Routes = [
  {
    path: '',
    redirectTo: redirect,
    pathMatch: 'full'
  },
  {
    path: 'authorization',
    loadChildren: () => import('./pages/authorization/authorization.module').then(m => m.AuthorizationPageModule)
  },
  { path: 'home', canActivate: [AuthGuard], loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)},
];



@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule implements OnInit{
  ngOnInit(){

  }

}
