import { Component } from '@angular/core';

@Component({
  selector: 'app-my-skills-section',
  templateUrl: './my-skills-section.component.html',
  styleUrls: ['./my-skills-section.component.scss']
})

export class MySkillsSectionComponent {

skill_images = ['Angular.png','TypeScript.png','Javascript.png','HTML.png','Firebase.png','GitHub.png','CSS.png','Rest-Api.png','scrum.png','Materialdesign.png'];
skill_names = ['Angular','TypeScript','Javascript','HTML','Firebase','GitHub','CSS','Rest-Api','Scrum','Materialdesign'];

}
