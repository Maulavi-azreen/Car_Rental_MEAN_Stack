import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
@Component({
  selector: 'app-users',
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  users = [
    { name: 'John Doe', email: 'john@example.com', role: 'Admin', active: true },
    { name: 'Jane Smith', email: 'jane@example.com', role: 'Customer', active: true },
    { name: 'Bob Johnson', email: 'bob@example.com', role: 'Manager', active: false },
    { name: 'Alice Brown', email: 'alice@example.com', role: 'Customer', active: true },
  ];

}
