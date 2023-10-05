import { Component, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-about-me-section',
  templateUrl: './about-me-section.component.html',
  styleUrls: ['./about-me-section.component.scss']
})
export class AboutMeSectionComponent implements AfterViewInit {

  observer!: IntersectionObserver;
  hiddenElements!: NodeListOf<HTMLElement>;

  constructor(private elementRef: ElementRef) {}

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

