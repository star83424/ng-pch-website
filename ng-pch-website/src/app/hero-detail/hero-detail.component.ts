import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;

  constructor(private messageService: MessageService) { }

  ngOnInit() {
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
