import { Component } from '@angular/core';
import { ToggleVisibilityService } from './global-variable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Portfolio';

  constructor(private toggleService: ToggleVisibilityService) {}

  get toggleVisibility() {
    return this.toggleService.toggleVisibility;
  }

  toggle() {
    this.toggleService.toggleVisibility = !this.toggleService.toggleVisibility;
  }
}