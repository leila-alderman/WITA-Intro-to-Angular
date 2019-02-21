import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DrinkService {

  constructor(private http: HttpClient) { }

  getRandomDrink() {
    this.http.get('https://www.thecocktaildb.com/api/json/v1/1/random.php').subscribe(res => {
      console.log(res);
    });
  }
}
