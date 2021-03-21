import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddDressComponent } from './add-dress/add-dress.component';
import { ViewComponent } from './view/view.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [ ViewComponent, AddDressComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule
  ]
})
export class AdminModule { }
