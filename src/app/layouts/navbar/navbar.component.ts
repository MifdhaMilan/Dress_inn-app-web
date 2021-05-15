import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { DressService } from 'src/app/services/dress.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
admin: boolean =false;
user: boolean = true;
public href: string = "";


  constructor(
    private dressService: DressService,
    private router: Router
 
  ) { }

  
  ngOnInit(): void {
    this.href = this.router.url;
    console.log(this.href);
  }


}
