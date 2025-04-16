import {Routes } from '@angular/router';
import { LoginComponent } from './components/landing_page/auth/login/login.component';
import { SignUpComponent } from './components/landing_page/auth/sign-up/sign-up.component';
import { HomeComponent } from './components/landing_page/home/home.component';
import { ForgotPasswordComponent } from './components/landing_page/auth/forgot-password/forgot-password.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';




export const routes: Routes = [
    //Landing Page Routes
    { path: '', component: HomeComponent }, // Home page route
    { path: 'sign-up', component: SignUpComponent },
    { path: 'login', component: LoginComponent },
    { path: 'forgot-password', component: ForgotPasswordComponent },


    //Admin Routes
    { path: 'admin', component: DashboardComponent },
    { path: 'admin/cars', component: DashboardComponent }, // Add actual components later
    { path: 'admin/bookings', component: DashboardComponent },
    { path: 'admin/users', component: DashboardComponent },
    { path: 'admin/analytics', component: DashboardComponent },
    { path: 'admin/settings', component: DashboardComponent },


    // Optional: Redirect for invalid routes (e.g., 404 handling)
    { path: '**', redirectTo: '', pathMatch: 'full' },
];

