import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink,CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @Input() isOpen=false;

  navItems = [
    { label: 'Dashboard', path: '/user', icon: 'home' },
    { label: 'My Bookings', path: '/user/my-bookings', icon: 'car' },
    { label: 'Bookings History', path: '/user/bookings-history', icon: 'calendar' },
  ];

}
