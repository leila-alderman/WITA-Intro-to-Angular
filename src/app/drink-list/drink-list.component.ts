import { Component, OnInit } from '@angular/core';
import { DrinkService } from '../service/drink.service';

@Component({
  selector: 'app-drink-list',
  templateUrl: './drink-list.component.html',
  styleUrls: ['./drink-list.component.css']
})
export class DrinkListComponent implements OnInit {

  constructor(private ds: DrinkService) { }

  ngOnInit() {
    this.ds.getRandomDrink();
  }

}
