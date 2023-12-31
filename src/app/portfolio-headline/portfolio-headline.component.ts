import { AfterViewInit, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-portfolio-headline',
  templateUrl: './portfolio-headline.component.html',
  styleUrls: ['./portfolio-headline.component.scss']
})
export class PortfolioHeadlineComponent implements AfterViewInit {


  observer!: IntersectionObserver;
  hiddenElements!: NodeListOf<HTMLElement>;

  constructor(private elementRef: ElementRef) {}
 
  /**
   * Described at about-me-section.component.ts
   */
  ngAfterViewInit() {
    this.hiddenElements = this.elementRef.nativeElement.querySelectorAll('.hidden');
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });
    this.hiddenElements.forEach((el) => this.observer.observe(el));
  }

}

