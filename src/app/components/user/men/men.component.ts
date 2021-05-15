import { Component, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { MatDialog } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Dress } from 'src/app/models/Dress';
import { DressService } from 'src/app/services/dress.service';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent implements OnInit {
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
}
