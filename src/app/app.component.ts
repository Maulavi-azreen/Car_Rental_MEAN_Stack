import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { CarShowcaseComponent } from './components/car-showcase/car-showcase.component';
import { CtaComponent } from './components/cta/cta.component';
import { FeaturesComponent } from './components/features/features.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { ProcedureSectionComponent } from './components/procedure-section/procedure-section.component';
import { CarBrandsMarqueeComponent } from "./components/car-brands-marquee/car-brands-marquee.component";




@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, HeroComponent, ProcedureSectionComponent, CarShowcaseComponent, CtaComponent, FeaturesComponent, TestimonialsComponent, CarBrandsMarqueeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'car-rental';
}
