import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-pch-website -> Heroes Practice!';

  constructor(private location: Location) {}

  goBack(): void {
    console.log(this.location.path());
    this.location.back();
  }
}
