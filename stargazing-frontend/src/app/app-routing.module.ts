import { SignUpComponent } from './sign-up/sign-up.component';
import { FormLoginComponent } from './login/form-login/form-login.component';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuardService } from './auth-guard.service';
import { LocationsComponent } from './locations/locations.component';

const routes: Routes = [
  { path: '',
    component: HomeComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: '?cityName',
    component: HomeComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'login',
    component: LoginComponent,
    children: [
    {
      path: 'form-login',
      component: FormLoginComponent
    }
  ]},
  {
    path: 'signup',
    component: SignUpComponent
  },
  {
    path: 'locations',
    component: LocationsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
