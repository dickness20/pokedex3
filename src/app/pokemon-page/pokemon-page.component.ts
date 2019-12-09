
import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';



@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrls: ['./pokemon-page.component.css']
})
export class PokemonPageComponent implements OnInit {
  pokemon: Pokemon;
  pokeurl: String = this.pokemon.url;
  constructor() { }

  ngOnInit() {
  }

}
