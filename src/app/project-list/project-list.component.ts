import { Type, Egg, Evolution, Pokedex,  Pokemon } from './../data-interface';
import { POKEDEX } from './../data';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  pokemons = POKEDEX;
  @Output() pokemonSelected = new EventEmitter<Pokemon>();
  constructor() { }
  onClick(pokemon: Pokemon): void {
    this.pokemonSelected.emit(pokemon)
  }
  ngOnInit() {
  }

}
