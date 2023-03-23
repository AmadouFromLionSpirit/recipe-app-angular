import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'PRACTICE_ANGULAR_PROJECT';
  loadedFeature = 'recipe';

  onNaviguate(feature: string) {
    this.loadedFeature = feature;
  }
}
