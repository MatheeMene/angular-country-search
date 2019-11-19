import { Component, OnInit, ViewChild } from '@angular/core';
import { CountriesApiService } from '../countries-api.service';

@Component({
  selector: 'app-specific-country',
  templateUrl: './specific-country.component.html',
  styleUrls: ['./specific-country.component.scss']
})
export class SpecificCountryComponent implements OnInit {

  private specificCountries: any;
  private values = '';
  private errorString = '';
  
  @ViewChild('spanCountry', {static: false})
  spanCountry: any;

  constructor(private specificCountriesApi: CountriesApiService) { }

  ngOnInit() {
    
  }

  public inputValue(event: any) {
    this.values = event.target.value;
  }

  public searchButton() {
    this.specificCountriesApi.getSpecificCountry(this.values).subscribe( data => {
      this.specificCountries = data;
      this.errorString = ''
    }, error => error.status == 404 ? this.errorString = "Country doesn't exists" : error.message);    
  }

}
