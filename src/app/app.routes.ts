import {Routes } from '@angular/router';
import { LoginComponent } from './components/landing_page/auth/login/login.component';
import { SignUpComponent } from './components/landing_page/auth/sign-up/sign-up.component';
import { HomeComponent } from './components/landing_page/home/home.component';
import { ForgotPasswordComponent } from './components/landing_page/auth/forgot-password/forgot-password.component';





export const routes: Routes = [
    //Landing Page Routes
    { path: '', component: HomeComponent }, // Home page route
    { path: 'sign-up', component: SignUpComponent },
    { path: 'login', component: LoginComponent },
    { path: 'forgot-password', component: ForgotPasswordComponent },


     // Admin Section (Lazy loaded)
  {
    path: 'admin',
    loadChildren: () =>
      import('./components/admin/routes').then((m) => m.AdminRoutingModule),
  },
     // User Section (Lazy loaded)
     {
      path: 'user',
      loadChildren: () =>
        import('./components/user/routes').then((m) => m.UserRoutingModule),
    },

  // 404 fallback
  { path: '**', redirectTo: '', pathMatch: 'full' },
];


