import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CarsComponent } from "./cars/cars.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MainContentComponent } from "./main-content/main-content.component";
import { BookingsComponent } from './bookings/bookings.component';
import { UsersComponent } from './users/users.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
    {
      path: '',
      component: DashboardComponent,
      children: [
        { path: '', component: MainContentComponent },
        { path: 'cars', component: CarsComponent },
        { path: 'bookings', component: BookingsComponent },
        { path: 'users', component: UsersComponent },
        { path: 'analytics', component: AnalyticsComponent },
        { path: 'settings', component: SettingsComponent },
        // Add other child routes here
      ],
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class AdminRoutingModule {}
  