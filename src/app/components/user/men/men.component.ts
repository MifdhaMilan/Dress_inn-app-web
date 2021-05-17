import { Component, Input, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { MatDialog } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Dress } from 'src/app/models/Dress';
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
  @Input() dress: Dress;
  allMenDress: Dress[] = [];
  mediaSub: Subscription;
  deviceXs: boolean;


  constructor(
    private dressService: DressService,
    public dialog: MatDialog,
    private toastr: ToastrService,
    public mediaObserver: MediaObserver
  ) { }

  ngOnInit() {
    this.getAllMenDress();

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


}
