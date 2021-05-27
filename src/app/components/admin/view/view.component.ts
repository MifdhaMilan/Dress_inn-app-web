import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dress } from 'src/app/models/Dress';
import { DressService } from 'src/app/services/dress.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  public dresses: Dress[];

  constructor(
    private dressService: DressService,
    private router: Router,
    private routes: ActivatedRoute
  ) { }

  ngOnInit() {
  
  }

  inToMen() {
    this.router.navigateByUrl('/admin/addDressMen');
  

  }
  inToWomen() {
    this.router.navigate(['/admin/addDressWomen']);
  }

}
