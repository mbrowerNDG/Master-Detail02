import { Pokemon } from './data-interface';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'master-detail02';
  public selectedPokemon: Pokemon;

  childPokemonSelected(pokemon: Pokemon){
    this.selectedPokemon = pokemon;
  }

}
