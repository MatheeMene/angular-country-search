import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountriesApiService {

  constructor(private httpClient: HttpClient) {
    
  }

  public getCountries() {
    return this.httpClient
      .get(`https://restcountries.eu/rest/v2/all`);
  }

  public getSpecificCountry(value: any) {
    return this.httpClient
      .get(`https://restcountries.eu/rest/v2/name/${value}`);
  }
}
