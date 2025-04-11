import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-testimonials',
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css',
})
export class TestimonialsComponent implements OnInit{
  testimonials = [
    {
      name: 'John Doe',
      profession: 'Software Engineer',
      content:
        'Amazing service! Helped me find the perfect car for my business trip.',
      image: 'assets/john_doe.jpg',
    },
    {
      name: 'Jane Smith',
      profession: 'Designer',
      content: 'The process was smooth, and the car was in great condition.',
      image: 'assets/jane_smith.jpg',
    },
    {
      name: 'Michael Brown',
      profession: 'Marketing Expert',
      content: 'Exceptional customer service and a wide range of vehicles.',
      image: 'assets/michael_brown.jpg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
