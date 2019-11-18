import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { 
  MzNavbarModule,
  MzCollapsibleModule,
  MzParallaxModule,
  MzCardModule,
  MzIconModule,
  MzIconMdiModule,
  MzInputModule,
  MzButtonModule
} from 'ngx-materialize';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AllCountriesComponent } from './all-countries/all-countries.component';
import { SpecificCountryComponent } from './specific-country/specific-country.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AllCountriesComponent,
    SpecificCountryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MzNavbarModule,
    MzCollapsibleModule,
    MzParallaxModule,
    MzCardModule,
    MzIconModule,
    MzIconMdiModule,
    MzInputModule,
    MzButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
