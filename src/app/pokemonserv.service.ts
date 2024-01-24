import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, mergeMap } from 'rxjs/operators';
import { forkJoin } from 'rxjs';

import { Pokeinterface } from './pokeinterface.js';

@Injectable({
  providedIn: 'root',
})
export class PokemonservService {
  private readonly apiUrl: string =
    'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100';

  constructor(private http: HttpClient) {}

  getPokemonDetails(url: string): Observable<any> {
    return this.http.get(url);
  }

  getPokemons(): Observable<Pokeinterface[]> {
    return this.http.get<Pokeinterface[]>(this.apiUrl).pipe(
      mergeMap((resp: any) => {
        const pokemonObservables: Observable<any>[] = resp.results.map(
          (pokemon: any) => {
            return this.getPokemonDetails(pokemon.url);
          }
        );
        return forkJoin(pokemonObservables);
      }),
      map((pokemonDetails: any[]) => {
        return pokemonDetails;
      })
    );
  }
}
