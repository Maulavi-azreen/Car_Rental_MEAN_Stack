import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output,HostListener,ElementRef, ViewChild, } from '@angular/core';
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
  @ViewChild('profileMenu') profileMenuRef!: ElementRef;

  notifications = [
    { id: 1, message: 'New booking received', time: '5m ago' },
    { id: 2, message: 'Car maintenance due', time: '1h ago' },
  ]; // Mock notifications; replace with API data

  constructor(private router:Router, private elementRef: ElementRef){}

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
  // 👇 Detect click outside dropdown to close it
  // ✅ Close dropdown only when click is outside both button & dropdown
  @HostListener('document:click', ['$event.target'])
  public onClickOutside(targetElement: HTMLElement): void {
    const clickedInside =
      this.elementRef.nativeElement.contains(targetElement) ||
      (this.profileMenuRef &&
        this.profileMenuRef.nativeElement.contains(targetElement));

    if (!clickedInside) {
      this.isProfileDropdownOpen = false;
    }
  }
}
