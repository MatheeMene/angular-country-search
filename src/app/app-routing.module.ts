import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AllCountriesComponent } from './all-countries/all-countries.component';
import { SpecificCountryComponent } from './specific-country/specific-country.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'allcountryes', component: AllCountriesComponent },
  { path: 'specificcountry', component: SpecificCountryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
