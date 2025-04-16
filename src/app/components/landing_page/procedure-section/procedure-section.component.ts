import { Component, OnInit,HostListener } from '@angular/core';

@Component({
  selector: 'app-procedure-section',
  imports: [],
  templateUrl: './procedure-section.component.html',
  styleUrl: './procedure-section.component.css'
})
export class ProcedureSectionComponent implements OnInit{
  constructor() { }

  ngOnInit(): void { }
  // Detect scroll and apply the animation class when the section is in view
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const section = document.querySelector('.text-center');
    const rect = section?.getBoundingClientRect();
    if (rect && rect.top <= window.innerHeight && rect.bottom >= 0) {
      section?.classList.add('animate-fade-in');
    }
  }
}
