import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { CarShowcaseComponent } from './components/car-showcase/car-showcase.component';
import { CtaComponent } from './components/cta/cta.component';
import { FeaturesComponent } from './components/features/features.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent,FooterComponent,HeroComponent,CarShowcaseComponent,CtaComponent,FeaturesComponent,TestimonialsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'car-rental';
}
