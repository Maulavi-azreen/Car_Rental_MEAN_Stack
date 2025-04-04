import { Component, HostListener } from '@angular/core';
@Component({
  selector: 'app-car-brands-marquee',
  imports: [],
  templateUrl: './car-brands-marquee.component.html',
  styleUrl: './car-brands-marquee.component.css'
})
export class CarBrandsMarqueeComponent {
  isHovered=false
  @HostListener('mouseenter', ['$event'])
  onMouseEnter() {
    this.isHovered = true;
  }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave() {
    this.isHovered = false;
  }

}
