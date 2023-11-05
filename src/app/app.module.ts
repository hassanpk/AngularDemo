import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbCollapseModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './Pages/home/app.component';
import { NavbarComponent } from './Pages/Shared/navbar/navbar.component';
import { AddItemComponent } from './Pages/Products/add-item/add-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListItemsComponent } from './Pages/Products/list-items/list-items.component';
import { EditItemComponent } from './Pages/Products/edit-item/edit-item.component';

import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { ProductService } from './Services/product-service.service';
import { LoginComponent } from './Pages/login/login.component';
import { SpinnerComponent } from './Pages/Shared/spinner/spinner.component';
import { LoadingInterceptor } from './loading.interceptor';
import { BarChartComponent } from './Pages/Charts/bar-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddItemComponent,
    ListItemsComponent,
    EditItemComponent,
    LoginComponent,
    SpinnerComponent,
    BarChartComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbCollapseModule,
    NgbDropdownModule,
    NgxDatatableModule
  
  ],
  providers: [ProductService,{
    provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
