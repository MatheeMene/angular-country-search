import { Component, OnInit } from '@angular/core';
import { CountriesApiService } from '../countries-api.service';

@Component({
  selector: 'app-all-countries',
  templateUrl: './all-countries.component.html',
  styleUrls: ['./all-countries.component.scss']
})
export class AllCountriesComponent implements OnInit {

  countries;

  constructor(private countriesApi: CountriesApiService) { }

  ngOnInit() {
    this.countriesApi.getCountries().subscribe( data => {
      this.countries = data;
    });
  }

}
