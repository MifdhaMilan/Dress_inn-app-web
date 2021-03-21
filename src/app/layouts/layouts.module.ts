import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    imports: [
      CommonModule,
      RouterModule,
      HttpClientModule,
      MatToolbarModule,
      MatIconModule,
      MatButtonModule
    ],
    declarations: [
        NavbarComponent,
        FooterComponent

    ],
    exports: [
        NavbarComponent,
        FooterComponent
    ]
  })
  export class LayoutsModule { }