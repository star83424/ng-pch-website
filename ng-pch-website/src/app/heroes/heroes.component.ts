import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;
  constructor(private heroService: HeroService) {
    // When Angular creates a HeroesComponent,
    //  the Dependency Injection system sets the heroService parameter
    //  to the singleton instance of HeroService.
  }

  ngOnInit() {
    this.getHeroes();
  }

  onClick(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }

}
