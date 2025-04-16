import { Component } from '@angular/core';

@Component({
  selector: 'app-analytics',
  imports: [],
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.css'
})
export class AnalyticsComponent {
  totalBookings: number = 2154;
  activeUsers: number = 317;

  // You can plug this into chart libraries like Chart.js or ngx-charts later
  monthlyTrends = [
    { month: 'Jan', bookings: 120 },
    { month: 'Feb', bookings: 180 },
    { month: 'Mar', bookings: 240 },
    { month: 'Apr', bookings: 300 },
    { month: 'May', bookings: 310 },
  ];

}
