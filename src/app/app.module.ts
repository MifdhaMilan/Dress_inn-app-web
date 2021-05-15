import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutsModule } from './layouts/layouts.module';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatIconModule, MatToolbarModule, MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AdminModule } from './components/admin/admin.module';
import { UserModule } from './components/user/user.module';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LayoutsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    BsDropdownModule.forRoot(),
    MatDialogModule,
    AdminModule,
    UserModule
    
    
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
