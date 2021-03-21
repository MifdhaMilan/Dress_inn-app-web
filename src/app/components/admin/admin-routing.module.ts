import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddDressComponent } from './add-dress/add-dress.component';
import { ViewComponent } from './view/view.component';


const routes: Routes = [
  { path: '', component: ViewComponent },
  { path: 'addDress', component: AddDressComponent }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
