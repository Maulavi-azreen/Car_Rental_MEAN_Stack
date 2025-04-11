import {Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';



export const routes: Routes = [
    { path: '', component: HomeComponent }, // Home page route
    { path: 'sign-up', component: SignUpComponent },
    { path: 'login', component: LoginComponent },
];

