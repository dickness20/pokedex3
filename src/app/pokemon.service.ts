import { Injectable } from '@angular/core';
import {Pokemon} from './pokemon';
import {Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/internal/operators';


// interface NameURL {
//   name: String;
//   url: String;
// }
// interface Abilities {
//   ability: NameURL;
//   is_hidden: Boolean;
//   slot: Number;
// }
// interface GameIndices {
//   game_index: Number;
//   version: NameURL;
// }
// interface VersionDetails {
//   rarity: Number;
//   version: NameURL;
// }
// interface HeldItems {
//   item: NameURL;
//   version_details: VersionDetails;
// }
// interface VersionGroupDetails {
//   level_learned_at: Number;
//   move_learned_method: NameURL;
//   version_group: NameURL;
// }
// interface Moves {
//   move: NameURL;
//   version_group_details: VersionGroupDetails;

// }
// interface Sprites {
//   back_default: String;
//   back_female: Boolean;
//   back_shiny: String;
//   back_shiny_female: Boolean;
//   front_default: String;
//   front_female: Boolean;
//   front_shiny: String;
//   front_shiny_female: String;
// }
// interface Stats {
//   base_stat: Number;
//   effort: Number;
//   stat: NameURL;
// }

// interface Types {
//   slot: Number;
//   type: NameURL;
// }

// interface Pokedata {
//   abilities: Abilities;
//   base_experience: Number;
//   forms: NameURL;
//   game_indices: GameIndices;
//   height: Number;
//   held_items: HeldItems;
//   id: Number;
//   is_default: Boolean;
//   location_are_encounters: String;
//   moves: Moves;
//   name: String;
//   order: Number;
//   species: NameURL;
//   sprites: Sprites;
//   stats: Stats;
//   types: Types;
//   weight: Number;
// }

// interface PokemonData {
//   pokemondata: Pokedata;
// }
interface PokedexEntry {
  name: String;
  url: String;
}

interface Pokedex {
  results: PokedexEntry[];
}

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemon: Pokemon;
  pokedexUrl: String = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=964';
  // pokemonUrl: String = this.pokemon.url;
  constructor(private http: HttpClient) { }

   fetchPokemon(): Observable<Pokemon[]> {
      return this.http
        .get<Pokedex>(`${this.pokedexUrl}`)
        .pipe(
          map(pokedex =>
            pokedex.results
              .slice(0, 807)
              .map((pokedexEntry: PokedexEntry) => new
              Pokemon(pokedexEntry.name, pokedexEntry.url)))
        );
      }
    // getPokemonId(): Observable<PokeID> {
    //   return this.http
    //   .get<PokemonData>(`${this.pokemonUrl}`)
    //   .pipe(
    //     map((pokedata: Pokedata) => new
    //       PokeID(pokedata.id)))
    //       ;
    // }
    // getPokemonType(): Observable<PokeType[]> {
    //   return this.http
    //   .get<PokemonData>(`${this.pokemonUrl}`)
    //   .pipe(
    //     map((pokedata: Pokedata) => new
    //       PokeType(pokedata.types.type.name )))
    //       ;
    // }
}
