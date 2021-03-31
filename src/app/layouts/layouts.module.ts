import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatDialogModule } from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";




@NgModule({
    imports: [
      CommonModule,
      RouterModule,
      HttpClientModule,
      BrowserAnimationsModule,
      MatToolbarModule,
      MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatDialogModule
   
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