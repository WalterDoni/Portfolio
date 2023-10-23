import { Component,AfterViewInit, ElementRef  } from '@angular/core';

@Component({
  selector: 'app-my-skills-section',
  templateUrl: './my-skills-section.component.html',
  styleUrls: ['./my-skills-section.component.scss']
})

export class MySkillsSectionComponent implements AfterViewInit{
skill_images = ['Angular.png','TypeScript.png','Javascript.png','HTML.png','Firebase.png','GitHub.png','CSS.png','Rest-Api.png','scrum.png','Materialdesign.png'];
skill_names = ['Angular','TypeScript','Javascript','HTML','Firebase','Git','CSS','Rest-Api','Scrum','Materialdesign'];

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
