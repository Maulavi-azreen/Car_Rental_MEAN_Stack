import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-my-bookings',
  imports: [CommonModule,FormsModule],
  templateUrl: './my-bookings.component.html',
  styleUrl: './my-bookings.component.css'
})
export class MyBookingsComponent {
  bookings = [
    { id: 1, car: 'Audi A4', pickup: '2025-04-20', return: '2025-04-25', status: 'upcoming' },
    { id: 2, car: 'Tesla Model 3', pickup: '2025-04-10', return: '2025-04-15', status: 'completed' },
    { id: 3, car: 'Hyundai i20', pickup: '2025-04-16', return: '2025-04-18', status: 'ongoing' },
  ];

  selectedStatus = '';
  filteredBookings = [...this.bookings];

  filterBookings() {
    this.filteredBookings = this.selectedStatus
      ? this.bookings.filter(b => b.status === this.selectedStatus)
      : [...this.bookings];
  }

  cancelBooking(id: number) {
    this.bookings = this.bookings.filter(b => b.id !== id);
    this.filterBookings();
    alert('Booking cancelled successfully!');
  }
}
