import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { DressService } from 'src/app/services/dress.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private dressService: DressService
 
  ) { }

  
  ngOnInit() {
   
  }


}
