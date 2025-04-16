import { Component , OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/landing_page/header/header.component";
import { FooterComponent } from "./components/landing_page/footer/footer.component";
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';





@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit{
  title = 'car-rental';
  showHeaderFooter=true;
  constructor(private router:Router){}

  ngOnInit(): void {
    // Subscribe to router events to check the current route
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        // Hide header and footer for admin or user dashboard routes
        this.showHeaderFooter = !(
          event.urlAfterRedirects.startsWith('/admin') ||
          event.urlAfterRedirects.startsWith('/user')
        );
      });
  }
}
