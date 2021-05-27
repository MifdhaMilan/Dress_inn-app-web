import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';
import { DressService } from 'src/app/services/dress.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  private cartItems;
  private totalAmmount;
  id: any = [];

  constructor(
    private cart: CartService,
    private toastr: ToastrService,
    private dressService: DressService
  ) { }

  ngOnInit() {
    this.cart.getProducts().subscribe(data => {
      this.cartItems = data;
console.log(this.cartItems)
      this.totalAmmount = this.cart.getTotalPrice();
    });
  }

  removeItemFromCart(productId) {
    this.cart.removeProductFromCart(productId);

  }

  emptyCart() {
    this.cart.emptryCart();
  }
  checkout(){
    for(let i=0;i<this.cartItems.length ; i++){
      this.id.push(this.cartItems[i].id);
    }
    console.log(this.id);
    this.dressService.orderDress(this.id).subscribe(next => {
      this.toastr.success('The odered items will be shipped soon! thank you for purchasing from Dress_inn');
    }, error => {
      this.toastr.error('Order Invalid. Please try again!');
    });
  }

}
