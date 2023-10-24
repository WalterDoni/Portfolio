import { Component } from '@angular/core';
import { ToggleVisibilityService } from '../global-variable';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})



export class HeaderComponent {

  
  constructor(private toggleService: ToggleVisibilityService,public translate: TranslateService) {}
  
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

  useLanguage(language: string): void {
    this.translate.use(language);
}

}
