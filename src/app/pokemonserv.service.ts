import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Pokeinterface } from './pokeinterface.js';

@Injectable({
  providedIn: 'root',
})
export class PokemonservService {
  private readonly apiUrl: string =
    'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100';

  constructor(private http: HttpClient) {}

  getPokemons(): Observable<Pokeinterface[]> {
    return this.http
      .get<Pokeinterface[]>(this.apiUrl)
      .pipe(map((resp: any) => resp.results));
  }
}
