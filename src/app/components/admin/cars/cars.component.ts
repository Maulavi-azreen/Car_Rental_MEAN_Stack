import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-cars',
  imports: [CommonModule],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent {
  cars = [
    {
      name: 'Toyota Camry',
      model: '2023',
      status: 'Available',
      image: 'assets/Toyota.png',
    },
    {
      name: 'Honda Civic',
      model: '2022',
      status: 'Booked',
      image: 'assets/Hero_img.png',
    },
    {
      name: 'Mercedes',
      model: '2023',
      status: 'Maintenance',
      image: 'assets/Mercedes.png',
    }
  ];

}
