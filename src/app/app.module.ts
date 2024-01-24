import { routing } from './app.routing.module.js';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PokemonservService } from './pokemonserv.service.js';
import { OtherpageComponent } from './otherpage/otherpage.component.js';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, OtherpageComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, routing],
  providers: [PokemonservService],
  bootstrap: [AppComponent],
})
export class AppModule {}
