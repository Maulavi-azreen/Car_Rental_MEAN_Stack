import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { MainContentComponent } from './main-content/main-content.component';
import { MyBookingsComponent } from './my-bookings/my-bookings.component';
import { BookingHistoryComponent } from './booking-history/booking-history.component';


const routes: Routes = [
    {
      path: '',
      component: UserDashboardComponent,
      children: [
        { path: '', component: MainContentComponent },
        { path: 'my-bookings', component: MyBookingsComponent },
        { path: 'bookings-history', component: BookingHistoryComponent },
        // { path: 'users', component: UsersComponent },
        // { path: 'analytics', component: AnalyticsComponent },
        // { path: 'settings', component: SettingsComponent },
        // Add other child routes here
      ],
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class UserRoutingModule {}