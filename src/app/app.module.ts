import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeadlineSectionComponent } from './headline-section/headline-section.component';
import { AboutMeSectionComponent } from './about-me-section/about-me-section.component';
import { MySkillsSectionComponent } from './my-skills-section/my-skills-section.component';
import { PortfolioHeadlineComponent } from './portfolio-headline/portfolio-headline.component';
import { ProjectsSectionComponent } from './projects-section/projects-section.component';
import { ContactSectionComponent } from './contact-section/ContactSectionComponent';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImprintComponent } from './imprint/imprint.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeadlineSectionComponent,
    AboutMeSectionComponent,
    MySkillsSectionComponent,
    PortfolioHeadlineComponent,
     ProjectsSectionComponent,
     ContactSectionComponent,
     FooterComponent,
     ImprintComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}