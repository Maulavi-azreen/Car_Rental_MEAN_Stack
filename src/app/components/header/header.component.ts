import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMenuOpen = false;
  isScrolled=false

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    // Add background color when scrolled past 50px
    this.isScrolled = window.scrollY > 50;
  }

}
