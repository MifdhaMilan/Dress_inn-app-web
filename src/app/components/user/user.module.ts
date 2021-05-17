import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { AdminRoutingModule } from '../admin/admin-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatCardModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [ 
    MenComponent, 
    WomenComponent,
     CartComponent,
      HomeComponent
    ],
  imports: [
    CommonModule,
    UserRoutingModule,
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FlexLayoutModule,
    MatCardModule,
    MatSelectModule
  ]
})
export class UserModule { }
