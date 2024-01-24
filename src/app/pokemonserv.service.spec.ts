import { TestBed } from '@angular/core/testing';

import { PokemonservService } from './pokemonserv.service';

describe('PokemonservService', () => {
  let service: PokemonservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
