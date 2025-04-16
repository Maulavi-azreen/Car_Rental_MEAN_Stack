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
    { label: 'Dashboard', path: '/admin', icon: 'home' },
    { label: 'Cars', path: '/admin/cars', icon: 'car' },
    { label: 'Bookings', path: '/admin/bookings', icon: 'calendar' },
    { label: 'Users', path: '/admin/users', icon: 'users' },
    { label: 'Analytics', path: '/admin/analytics', icon: 'chart-bar' },
    { label: 'Settings', path: '/admin/settings', icon: 'cog' },
  ];

}
