import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemComponent } from './Pages/Products/add-item/add-item.component';
import { ListItemsComponent } from './Pages/Products/list-items/list-items.component';
import { EditItemComponent } from './Pages/Products/edit-item/edit-item.component';
import { LoginComponent } from './Pages/login/login.component';
import { AuthGuardService } from './auth-guard';
import { BarChartComponent } from './Pages/Charts/bar-chart.component';

const routes: Routes = [ 
  {path :"", component: ListItemsComponent, canActivate:[AuthGuardService]},
  {path :"login", component: LoginComponent },
  {path: 'add', component:  AddItemComponent,canActivate:[AuthGuardService]},
  {path : 'add/:id', component: AddItemComponent,canActivate:[AuthGuardService]},
  {path: 'chart', component: BarChartComponent,canActivate:[AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
