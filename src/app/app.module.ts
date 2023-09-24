import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeadlineSectionComponent } from './headline-section/headline-section.component';
import { AboutMeSectionComponent } from './about-me-section/about-me-section.component';
import { MySkillsSectionComponent } from './my-skills-section/my-skills-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeadlineSectionComponent,
    AboutMeSectionComponent,
    MySkillsSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
