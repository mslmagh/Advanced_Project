import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { OrderListComponent } from './components/order-list/order-list.component';
import { OrderDetailComponent } from './components/order-detail/order-detail.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';

const routes: Routes = [
  { path: '', component: OrderListComponent },
  { path: ':id', component: OrderDetailComponent }
];

@NgModule({
  declarations: [
    OrderListComponent,
    OrderDetailComponent
  ],
  imports: [
    SharedModule,
    MatTableModule,
    MatSortModule,
    MatStepperModule,
    RouterModule.forChild(routes)
  ]
})
export class OrdersModule { } 