import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
type Booking = {
  id: number;
  car: string;
  pickup: string;
  return: string;
  status: string;
};

@Component({
  selector: 'app-booking-history',
  imports: [CommonModule,FormsModule],
  templateUrl: './booking-history.component.html',
  styleUrl: './booking-history.component.css'
})
export class BookingHistoryComponent {
  bookingHistory: Booking[] = [
    { id: 1, car: 'Toyota Fortuner', pickup: '2025-03-10', return: '2025-03-15', status: 'completed' },
    { id: 2, car: 'Mahindra XUV700', pickup: '2025-02-05', return: '2025-02-10', status: 'completed' },
    { id: 3, car: 'BMW 5 Series', pickup: '2025-01-20', return: '2025-01-25', status: 'completed' },
  ];

  sortBy: keyof Booking = 'pickup'; // 👈 restrict to known keys

  sortBookings() {
    this.bookingHistory.sort((a, b) =>
      new Date(a[this.sortBy] as string).getTime() - new Date(b[this.sortBy] as string).getTime()
    );
  }
}
