import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})



export class HeaderComponent {
  burgermenu = false;


  showMenu() {

    if (this.burgermenu == false) {
      this.burgermenu = true;
      console.log(this.burgermenu);

    } else {
      this.burgermenu = false;
      console.log(this.burgermenu);
    }
  }



}
