import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  private cartItems;
  private totalAmmount;

  constructor(
    private cart: CartService
  ) { }

  ngOnInit() {
    this.cart.getProducts().subscribe(data => {
      this.cartItems = data;
console.log(this.cartItems)
      this.totalAmmount = this.cart.getTotalPrice();
    });
  }
  // Remove item from cart list
  removeItemFromCart(productId) {
    /* this.cartItems.map((item, index) => {
      if (item.id === productId) {
        this.cartItems.splice(index, 1);
      }
    });

    this.mySharedService.setProducts(this.cartItems); */

    this.cart.removeProductFromCart(productId);

  }

  emptyCart() {
    this.cart.emptryCart();
  }
}
