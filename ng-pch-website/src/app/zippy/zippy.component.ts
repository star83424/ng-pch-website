import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-zippy',
  template: `
  <div class="zippy" >
    <div class="zippy-dropdown" [ngClass]="{'toggle-open': visible, 'toggle-close': !visible}" (click)="toggle($event)">
      <ng-container *ngIf="visible">^</ng-container>
      <ng-container *ngIf="!visible">v</ng-container>
    </div>
    <div [hidden]="!visible">
      <ng-content></ng-content>
    </div>
 </div>`,
  styleUrls: ['./zippy.component.scss']
})
export class ZippyComponent implements OnInit {

  visible = true;
  @Output() openZip: EventEmitter<any> = new EventEmitter();
  @Output() closeZip: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  toggle(e: Event): void {
    this.visible = ! this.visible;
    if (this.visible) {
      this.openZip.emit(e);
    } else {
      this.closeZip.emit(e);
    }
  }

}
