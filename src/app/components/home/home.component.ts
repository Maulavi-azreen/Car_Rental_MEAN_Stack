import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HeroComponent } from '../hero/hero.component';
import { ProcedureSectionComponent } from '../procedure-section/procedure-section.component';
import { CarShowcaseComponent } from '../car-showcase/car-showcase.component';
import { AboutCompanyComponent } from '../about-company/about-company.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';
import { FeaturesComponent } from '../features/features.component';
import { CtaComponent } from '../cta/cta.component';
import { FooterComponent } from '../footer/footer.component';
import { ContactComponent } from "../contact/contact.component";



@Component({
  selector: 'app-home',
  imports: [HeaderComponent, HeroComponent, ProcedureSectionComponent, CarShowcaseComponent, AboutCompanyComponent, TestimonialsComponent, FeaturesComponent, CtaComponent,FooterComponent, ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
