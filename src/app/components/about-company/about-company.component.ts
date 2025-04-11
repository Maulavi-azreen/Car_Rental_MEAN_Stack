import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-about-company',
  imports: [],
  templateUrl: './about-company.component.html',
  styleUrl: './about-company.component.css'
})
export class AboutCompanyComponent implements OnInit, AfterViewInit{
  ngOnInit() {
  }
  ngAfterViewInit() {
    this.observeSection();
  }
   // Function to observe when the About Company section is in the viewport
   observeSection() {
    const aboutSection = document.querySelector('#about-company-section'); // Your section's ID
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // If the section is in view, trigger the counter animation
          this.animateCounters();
        }
      });
    }, {
      threshold: 0.5  // Trigger when 50% of the section is in view
    });

    if (aboutSection) {
      observer.observe(aboutSection);
    }
  }


 // Function to animate counters
  animateCounters() {
    const counters = document.querySelectorAll('.count');
    counters.forEach((counter: any) => {
      const target = parseInt(counter.getAttribute('data-target'));
      let count = 0;
      const increment = target / 100; // Adjust the increment speed
      const interval = setInterval(() => {
        count += increment;
        counter.innerText = Math.floor(count).toString();
        if (count >= target) {
          clearInterval(interval);
          counter.innerText = target.toString(); // Ensure it reaches the exact target
        }
      }, 10); // Adjust the speed here
    });
  }
}
