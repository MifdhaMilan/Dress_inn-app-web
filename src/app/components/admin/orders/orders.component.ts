import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DressService } from 'src/app/services/dress.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
OrderedDress: any;
  constructor(
    private dressService: DressService,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
this.dressService.getOrderedDress().subscribe(next => {
  this.OrderedDress = next;
  console.log(this.OrderedDress)
})
  }
  acceptOrder(id: number){
    this.dressService.acceptOrderDress(id).subscribe(next =>{
      this.toastr.success('Order Accepted');
    })
  }
}
