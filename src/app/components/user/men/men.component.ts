import { Component, Input, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { MatDialog } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Dress } from 'src/app/models/Dress';
import { CartService } from 'src/app/services/cart.service';
import { DressService } from 'src/app/services/dress.service';

interface Size {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent implements OnInit {
  allMenDress: Dress[] = [];
  mediaSub: Subscription;
  deviceXs: boolean;
  private singleProduct;
  private isAdded;

  constructor(
    private dressService: DressService,
    public dialog: MatDialog,
    private toastr: ToastrService,
    public mediaObserver: MediaObserver,
    private cart: CartService
  ) { }

  ngOnInit() {
    this.getAllMenDress();
    this.isAdded = new Array(this.allMenDress.length);
    this.isAdded.fill(false, 0, this.allMenDress.length);
    console.log('this.isAdded -> ', this.isAdded, this.allMenDress);

    this.cart.getProducts().subscribe(data => {

      if (data && data.length > 0) {

      } else {
        this.allMenDress.map((item, index) => {
          this.isAdded[index] = false;
        });
      }

    });
  }

  getAllMenDress() {
    this.dressService.getDresses().subscribe(data => {
      this.allMenDress = data;
      console.log(this.allMenDress);
    }, error => {

      this.toastr.error('getting dresses failed');
    });

  }

  sizes: Size[] = [
    {value: 'sm', viewValue: 'Small'},
    {value: 'md', viewValue: 'Medium'},
    {value: 'lg', viewValue: 'large'},
    {value: 'xl', viewValue: 'Extra large'}
  ];

  addToCart(event, productId) {
    
    // If Item is already added then display alert message
    if (event.target.classList.contains('btn-success')) {
      alert('This product is already added into cart.');
      return false;
    }

    // Change button color to green
    this.allMenDress.map((item, index) => {
      if (item.id === productId) {
        this.isAdded[index] = true;
      }
    })

    this.singleProduct = this.allMenDress.filter(product => {
      return product.id === productId;
    });

    // this.cartItems.push(this.singleProduct[0]);

    this.cart.addProductToCart(this.singleProduct[0]);
  }

}
