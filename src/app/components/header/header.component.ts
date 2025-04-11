import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isScrolled = false;
  menuOpen = false;
  isMobile = window.innerWidth < 768; // Using 768px as the md breakpoint

  constructor() {
    this.checkScreenSize(); // Initial check on component initialization
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    this.isScrolled = window.pageYOffset > 50; // Add shadow when scrolled more than 50px
    console.log('Scroll position:', window.pageYOffset, 'isScrolled:', this.isScrolled); // Debug log
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  private checkScreenSize() {
    this.isMobile = window.innerWidth < 768;
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('nav')) {
      this.menuOpen = false; // Close menu when clicking outside
    }
  }
 
}
