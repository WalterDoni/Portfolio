import { Component, Input } from '@angular/core';
import { ToggleVisibilityService } from '../global-variable';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent {
  constructor(private toggleService: ToggleVisibilityService) {}

  toggleVisibility() {
    this.toggleService.toggleVisibility = !this.toggleService.toggleVisibility;
  }

}

