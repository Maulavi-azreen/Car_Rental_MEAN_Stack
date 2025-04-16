import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import Chart from 'chart.js/auto';


@Component({
  selector: 'app-main-content',
  imports: [RouterOutlet,CommonModule],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})
export class MainContentComponent implements AfterViewInit{
  stats = [
    { label: 'Total Bookings', value: 120, icon: 'calendar', color: 'from-blue-500 to-blue-700' },
    { label: 'Active Cars', value: 45, icon: 'car', color: 'from-green-500 to-green-700' },
    { label: 'Revenue', value: '$12,500', icon: 'dollar-sign', color: 'from-yellow-500 to-yellow-700' },
    { label: 'Users', value: 300, icon: 'users', color: 'from-purple-500 to-purple-700' },
  ];
  recentBookings = [
    { id: 'B001', customer: 'John Doe', car: 'Toyota Corolla', date: '2025-04-10', status: 'Active' },
    { id: 'B002', customer: 'Jane Smith', car: 'Honda Civic', date: '2025-04-11', status: 'Completed' },
    { id: 'B003', customer: 'Mike Brown', car: 'Ford Mustang', date: '2025-04-12', status: 'Pending' },
    { id: 'B004', customer: 'Emma Wilson', car: 'BMW X5', date: '2025-04-13', status: 'Active' },
  ];

  // Mock chart data (replace with Chart.js or API data)
  chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr'],
    bookings: [30, 45, 60, 120],
    revenue: [5000, 7500, 10000, 12500],
  };
  // Data for pie chart (Top Car Categories)
  topCarData = {
    labels: ['Sport Car', 'SUV', 'Coupe', 'Hatchback', 'MPV'],
    datasets: [{
      data: [17439, 18487, 12850, 14406, 72030],
      backgroundColor: ['#3B82F6', '#60A5FA', '#93C5FD', '#BFDBFE', '#DBEAFE'],
      borderWidth: 0,
    }],
  };

  ngAfterViewInit() {
    // Bookings Chart
    new Chart(document.getElementById('bookingsChart') as HTMLCanvasElement, {
      type: 'bar',
      data: {
        labels: this.chartData.labels,
        datasets: [{
          label: 'Bookings',
          data: this.chartData.bookings,
          backgroundColor: 'rgba(59, 130, 246, 0.5)',
          borderColor: 'rgba(59, 130, 246, 1)',
          borderWidth: 1,
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: { y: { beginAtZero: true } },
      },
    });

    // Revenue Chart
    new Chart(document.getElementById('revenueChart') as HTMLCanvasElement, {
      type: 'line',
      data: {
        labels: this.chartData.labels,
        datasets: [{
          label: 'Revenue ($)',
          data: this.chartData.revenue,
          backgroundColor: 'rgba(255, 206, 86, 0.5)',
          borderColor: 'rgba(255, 206, 86, 1)',
          borderWidth: 2,
          fill: true,
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: { y: { beginAtZero: true } },
      },
    });

    // Top Car Categories Chart
    new Chart(document.getElementById('topCarChart') as HTMLCanvasElement, {
      type: 'doughnut',
      data: this.topCarData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'bottom' },
          tooltip: { callbacks: { label: (context) => `${context.label}: ${context.raw}` } },
        },
      },
    });
  }
}
