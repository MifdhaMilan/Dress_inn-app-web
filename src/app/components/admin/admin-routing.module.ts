import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenComponent } from './add-dress/men/men.component';
import { WomenComponent } from './add-dress/women/women.component';
import { ViewComponent } from './view/view.component';


const routes: Routes = [
  { path: 'admin', component: ViewComponent},
  { path: 'admin/addDressMen', component:MenComponent},
  { path: 'admin/addDressWomen', component:WomenComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
