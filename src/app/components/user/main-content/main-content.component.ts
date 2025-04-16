import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main-content',
  imports: [CommonModule],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})
export class MainContentComponent {
  userName = 'John Doe';
  upcomingBookings = 2;
  totalTrips = 12;
  savedCars = 3;

  latestBooking = {
    car: 'Toyota Fortuner 2023',
    date: 'April 18, 2025',
    location: 'Downtown Pickup Hub'
  };
}
