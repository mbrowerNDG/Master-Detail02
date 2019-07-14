import { Pokemon } from './../data-interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
  @Input() pokemon: Pokemon;
  constructor() { }

  ngOnInit() {
  }

}
