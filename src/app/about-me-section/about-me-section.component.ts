import { Component, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-about-me-section',
  templateUrl: './about-me-section.component.html',
  styleUrls: ['./about-me-section.component.scss']
})
export class AboutMeSectionComponent implements AfterViewInit {

  observer!: IntersectionObserver;
  hiddenElements!: NodeListOf<HTMLElement>;

  constructor(private elementRef: ElementRef) { }

  /**
   * Monitors the visibility of elements with CSS class 'hidden' and adds the 'show' class 
   * when they are visible in the viewport or removes it when they exit the viewport.
   */
  ngAfterViewInit() {

    this.hiddenElements = this.elementRef.nativeElement.querySelectorAll('.hidden');  // Select all DOM-Elements with the class "hidden".
    this.observer = new IntersectionObserver((entries) => {  // IntersectionObserver -> Used to check if an element is on- or outviewpoint. 
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });


    // Starts the monitoring for all selected elements.
    this.hiddenElements.forEach((el) => this.observer.observe(el));
  }

}

