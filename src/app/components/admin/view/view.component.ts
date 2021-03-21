import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Dress } from 'src/app/models/Dress';
import { DressService } from 'src/app/services/dress.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  public dresses: Dress[];
  
  constructor(private dressService : DressService) { }

  ngOnInit() {
    this.getDresses();
  }

  public getDresses(): void{
    this.dressService.getDresses().subscribe(
      (response: Dress[]) => {
        this.dresses = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
