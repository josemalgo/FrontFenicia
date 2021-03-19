import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app/app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddEmployeeComponent } from './Employees/Components/add-employee/add-employee.component';
import { ShowEmployeesComponent } from './Employees/Components/show-employees/show-employees.component';
import { EditEmployeeComponent } from './Employees/Components/edit-employee/edit-employee.component';
import { ShowCustomersComponent } from './Customers/Components/show-customers/show-customers.component';
import { CustomerDetailComponent } from './Customers/Components/customer-detail/customer-detail.component';
import { ShowOrdersComponent } from './Orders/Components/show-orders/show-orders.component';
import { OrderDetailComponent } from './Orders/Components/order-detail/order-detail.component';
import { ShowProductsComponent } from './Products/Components/show-products/show-products.component';
import { ProductDetailComponent } from './Products/Components/product-detail/product-detail.component';
import { AddProductComponent } from './Products/Components/add-product/add-product.component';
import { EditProductComponent } from './Products/Components/edit-product/edit-product.component';
import { DeleteProductComponent } from './Products/Components/delete-product/delete-product.component';
import { FilterPipe } from './Pipes/filter.pipe';
import { ViewEmployeeComponent } from './Employees/Components/view-employee/view-employee.component';
import { LoginComponent } from './Login/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddEmployeeComponent,
    ShowEmployeesComponent,
    EditEmployeeComponent,
    ShowCustomersComponent,
    CustomerDetailComponent,
    ShowOrdersComponent,
    OrderDetailComponent,
    ShowProductsComponent,
    ProductDetailComponent,
    AddProductComponent,
    EditProductComponent,
    DeleteProductComponent,
    FilterPipe,
    ViewEmployeeComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

