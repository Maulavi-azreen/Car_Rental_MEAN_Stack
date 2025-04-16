import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HeaderComponent } from '../header/header.component';
import { MainContentComponent } from '../main-content/main-content.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-dashboard',
  imports: [SidebarComponent, HeaderComponent, MainContentComponent,CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  isSidebarOpen = false;
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

}
