import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';



const routes: Routes = [
  { path: 'user', component: HomeComponent},
  { path: 'user/viewMen', component: MenComponent},
  { path: 'user/viewWomen', component: WomenComponent},
  { path: 'user/cart', component: CartComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
