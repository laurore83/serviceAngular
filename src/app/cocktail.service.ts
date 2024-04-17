import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  public cocktails: Cocktail[] = [];

  constructor() {
    // Initialisation de quelques cocktails
    this.cocktails.push(
      new Cocktail('Piña Colada', 8.99, 'https://example.com/pina_colada.jpg')
    );
    this.cocktails.push(
      new Cocktail('Margarita', 7.99, 'https://example.com/margarita.jpg')
    );
    this.cocktails.push(
      new Cocktail('Mojito', 9.99, 'https://example.com/mojito.jpg')
    );
  }

  getCocktails(): Cocktail[] {
    return this.cocktails;
  }
}

export class Cocktail {
  constructor(public name: string, public price: number, public img: string) {}
}
