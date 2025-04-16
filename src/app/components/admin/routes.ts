import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CarsComponent } from "./cars/cars.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MainContentComponent } from "./main-content/main-content.component";


const routes: Routes = [
    {
      path: '',
      component: DashboardComponent,
      children: [
        { path: '', component: MainContentComponent },
        { path: 'cars', component: CarsComponent },
        // Add other child routes here
      ],
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class AdminRoutingModule {}
  