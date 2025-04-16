import { CommonModule } from '@angular/common';
import { Component, HostListener ,OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-header',
  imports: [CommonModule,RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit, OnDestroy {
  isScrolled = false;
  menuOpen = false;
  isMobile = window.innerWidth < 768; // Using 768px as the md breakpoint
  private fragmentSubscription: Subscription | undefined;

  constructor(private route:ActivatedRoute) {
    this.checkScreenSize(); // Initial check on component initialization
  }
  ngOnInit() {
    // Subscribe to fragment changes for scrolling to sections
    this.fragmentSubscription = this.route.fragment.subscribe(fragment => {
      if (fragment) {
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
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

  ngOnDestroy() {
    // Clean up subscription
    if (this.fragmentSubscription) {
      this.fragmentSubscription.unsubscribe();
    }
  }
 
}
