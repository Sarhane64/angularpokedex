import { Component } from '@angular/core';
import { PokemonservService } from './pokemonserv.service.js';
import { OnInit } from '@angular/core';
import { Pokeinterface } from './pokeinterface.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  testvar: Pokeinterface[] = [];

  constructor(private pokemonservService: PokemonservService) {}

  ngOnInit(): void {
    this.pokemonservService
      .getPokemons()
      .subscribe((results: Pokeinterface[]) => {
        console.log(results);
        this.testvar = results;
      });
  }
}
