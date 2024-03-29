import { PokemonService } from './pokemon.service';
// import { PokedataService } from './pokedata.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonItemComponent } from './pokemon-item/pokemon-item.component';
import {FormsModule} from '@angular/forms';
import { FilterPokemonPipe } from './filter-pokemon.pipe';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { PokemonPageComponent } from './pokemon-page/pokemon-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PokemonListComponent,
    PokemonItemComponent,
    FilterPokemonPipe,
    HomePageComponent,
    PokemonPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // MaterialModule,
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
