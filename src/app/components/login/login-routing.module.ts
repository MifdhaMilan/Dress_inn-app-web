import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewComponent } from '../admin/view/view.component';
import { HomeComponent } from '../user/home/home.component';



const routes: Routes = [
  { path: 'admin', component: ViewComponent},
  { path: 'user', component:HomeComponent},

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class loginRoutingModule { }
