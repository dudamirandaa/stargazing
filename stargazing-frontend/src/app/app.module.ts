import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { FormLoginComponent } from './login/form-login/form-login.component';
import { HomeComponent } from './home/home.component';
import { CoordinatesComponent } from './home/coordinates/coordinates.component';
import { SkymapComponent } from './skymap/skymap.component';
import { SafePipe } from './safe-pipe';
import { TableCoordinatesComponent } from './home/table-coordinates/table-coordinates.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LocationsComponent } from './locations/locations.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    NavbarComponent,
    LoginComponent,
    FormLoginComponent,
    HomeComponent,
    CoordinatesComponent,
    SkymapComponent,
    SafePipe,
    TableCoordinatesComponent,
    SignUpComponent,
    LocationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CoordinatesComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
