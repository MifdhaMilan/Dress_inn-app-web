import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { DressService } from 'src/app/services/dress.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Location } from '@angular/common';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
admin: boolean =false;
user: boolean = true;
path: string;
private cartProductCount: number = 0;

  constructor(
    private dressService: DressService,
    private Location:Location,
    private cart: CartService
 
  ) {  
    this.path = this.Location.path()
    console.log(this.path);
    }
    
  ngOnInit(): void {
    this.cart.getProducts().subscribe(data => {
      this.cartProductCount = data.length;
    })
  }


}
