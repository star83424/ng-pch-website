import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;
  constructor(private heroService: HeroService, private messageService: MessageService) {
    // When Angular creates a HeroesComponent,
    //  the Dependency Injection system sets the heroService parameter
    //  to the singleton instance of HeroService.
  }

  ngOnInit() {
    this.getHeroes();
  }

  onClick(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroService: Selected hero id=${hero.id}`);
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes: Hero[]) => {
      this.heroes = heroes;
    });
  }

  onOpen(e: any): void {
    this.messageService.add('Zippy\'s onOpen.');
    // console.log('Zippy\'s onOpen:', e);
  }

  onClose(e: any): void {
    this.messageService.add('Zippy\'s onClose.');
    // console.log('Zippy\'s onClose:', e);
  }

}
