import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from '../dashboard/dashboard.component';
import { ShowEmployeesComponent } from '../Employees/Components/show-employees/show-employees.component';
import { ProductDetailComponent } from '../Products/Components/product-detail/product-detail.component'
import { LoginComponent } from '../Login/Component/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'employees', component: ShowEmployeesComponent },
  { path: 'productDetail', component: ProductDetailComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
