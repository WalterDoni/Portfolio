import { Component } from '@angular/core';
import { ToggleVisibilityService } from './global-variable';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Portfolio';

  
  constructor(private toggleService: ToggleVisibilityService, public translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
}
  get toggleVisibility() {
    return this.toggleService.toggleVisibility;
  }

  toggle() {
    this.toggleService.toggleVisibility = !this.toggleService.toggleVisibility;
  }



}