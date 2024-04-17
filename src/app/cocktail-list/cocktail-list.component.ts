import { Component, inject } from '@angular/core';
import { Cocktail, CocktailService } from '../cocktail.service';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrl: './cocktail-list.component.css',
})
export class CocktailListComponent {
  public cocktailService = inject(CocktailService);
  public cocktails: Cocktail[] = [];
  onClick() {
    console.log(this.cocktailService.getCocktails());
    return (this.cocktails = this.cocktailService.getCocktails());
  }
}
