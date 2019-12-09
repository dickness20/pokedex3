

import {Component, Input, OnInit} from '@angular/core';
import {Pokemon } from '../pokemon';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators';


@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.css']
})
export class PokemonItemComponent implements OnInit {
  @Input()
  pokemon: Pokemon;

  constructor() { }

  ngOnInit() {
  }

}
