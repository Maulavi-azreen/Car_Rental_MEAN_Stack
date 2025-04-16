import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { ProcedureSectionComponent } from '../procedure-section/procedure-section.component';
import { CarShowcaseComponent } from '../car-showcase/car-showcase.component';
import { AboutCompanyComponent } from '../about-company/about-company.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';
import { FeaturesComponent } from '../features/features.component';
import { CtaComponent } from '../cta/cta.component';
import { ContactComponent } from "../contact/contact.component";



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ HeroComponent, ProcedureSectionComponent, CarShowcaseComponent, AboutCompanyComponent, TestimonialsComponent, FeaturesComponent, CtaComponent, ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
