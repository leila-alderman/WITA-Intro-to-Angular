import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DrinkService {

  constructor(private http: HttpClient) { }

  getList() {
    const myDrinks: Drink[] = [];
    for (let i=0; i<10; i++) {
      this.getRandomDrink().subscribe(res => {
        console.log(myDrinks);
        if (res.drinks) {
          myDrinks.push(res.drinks[0] as Drink);
        }
      })
    }
  }
  
  getRandomDrink() {
    this.http.get('https://www.thecocktaildb.com/api/json/v1/1/random.php').subscribe(res => {
      console.log(res);
    });
  }
}
