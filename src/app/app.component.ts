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
import { CarBrandsMarqueeComponent } from "./components/car-brands/car-brands-marquee.component";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AboutCompanyComponent } from './components/about-company/about-company.component';
import { ContactComponent } from './components/contact/contact.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { LoginComponent } from './components/auth/login/login.component';
import { HomeComponent } from "./components/home/home.component";





@Component({
  selector: 'app-root',
  imports: [HttpClientModule, RouterOutlet, LoginComponent, SignUpComponent, ContactComponent, HeaderComponent, AboutCompanyComponent, FooterComponent, HeroComponent, ProcedureSectionComponent, CarShowcaseComponent, CtaComponent, FeaturesComponent, TestimonialsComponent, CarBrandsMarqueeComponent, CommonModule, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'car-rental';
}
