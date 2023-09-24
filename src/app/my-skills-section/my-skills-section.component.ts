import { Component } from '@angular/core';

@Component({
  selector: 'app-my-skills-section',
  templateUrl: './my-skills-section.component.html',
  styleUrls: ['./my-skills-section.component.scss']
})

export class MySkillsSectionComponent {

skill_images = ['Angular.png','CSS.png','Firebase.png','git.png','html.png','Javascript.png','Materialdesign.png','Rest-Api.png','scrum.png','TypeScript.png'];
skill_names = ['Angular','CSS','Firebase','Github','HTML','Javascript','Materialdesign','Rest-Api','Scrum','TypeScript'];

}
