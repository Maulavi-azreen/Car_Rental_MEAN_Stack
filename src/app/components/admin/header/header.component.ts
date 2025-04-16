import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() toggleSidebar=new EventEmitter<void>()

  adminName='Admin'

  isProfileDropdownOpen = false;

  notifications = [
    { id: 1, message: 'New booking received', time: '5m ago' },
    { id: 2, message: 'Car maintenance due', time: '1h ago' },
  ]; // Mock notifications; replace with API data

  constructor(private router:Router){}

  toggleProfileDropdown() {
    this.isProfileDropdownOpen = !this.isProfileDropdownOpen;
  }

  onSearch(){}

  logout() {
    // Clear auth token (replace with your auth service logic)
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  markNotificationsAsRead() {
    // Mock action; replace with API call to clear notifications
    this.notifications = [];
  }

}
