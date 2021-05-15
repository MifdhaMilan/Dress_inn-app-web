import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ViewComponent } from './view/view.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [ViewComponent, MenComponent, WomenComponent, CartComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
