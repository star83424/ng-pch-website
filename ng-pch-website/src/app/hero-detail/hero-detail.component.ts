import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { MessageService } from '../message.service';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private messageService: MessageService) { }

  ngOnInit() {
    // this.getHeroAndFiltById();
    this.getHeroById();
  }

  onOpen(e: any): void {
    this.messageService.add('Zippy\'s onOpen.');
  }

  onClose(e: any): void {
    this.messageService.add('Zippy\'s onClose.');
  }

  getHeroAndFiltById(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.heroService.getHeroes().subscribe(heroes => this.hero = heroes.find(hero => id === hero.id.toString()));
  }

  getHeroById(): void {
    // The JavaScript (+) operator converts the string to a number, which is what a hero id should be.
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHeroById(id).subscribe(hero => this.hero = hero);
  }
  }

}
