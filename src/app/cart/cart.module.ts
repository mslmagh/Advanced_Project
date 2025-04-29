import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CartComponent } from './components/cart/cart.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';

const routes: Routes = [
  { path: '', component: CartComponent }
];

@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    SharedModule,
    MatStepperModule,
    MatTableModule,
    RouterModule.forChild(routes)
  ]
})
export class CartModule { } 