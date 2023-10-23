import { Component } from '@angular/core';
import { ToggleVisibilityService } from '../global-variable';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})



export class HeaderComponent {

  
  constructor(private toggleService: ToggleVisibilityService) {}
  
  burgermenu = false;

  showMenu() {
    if (this.burgermenu == false) {
      this.burgermenu = true;
    } else {
      this.burgermenu = false;
    }
  }

  disableImprint() {
    this.toggleService.toggleVisibility = true;
  }

}
