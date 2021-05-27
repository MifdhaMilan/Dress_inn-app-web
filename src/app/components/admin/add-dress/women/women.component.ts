import { Component, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { MatDialog } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Dress } from 'src/app/models/Dress';
import { DressService } from 'src/app/services/dress.service';
import { AddDressWomenComponent } from './add-dress-women/add-dress-women.component';
import { DeleteDressWomenComponent } from './delete-dress-women/delete-dress-women.component';
import { EditDressWomenComponent } from './edit-dress-women/edit-dress-women.component';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css']
})
export class WomenComponent implements OnInit {
  allWomenDress: Dress[] = [];
  mediaSub: Subscription;
  deviceXs: boolean;
  constructor(
    public dialog: MatDialog,
    private dressService: DressService,
    private toastr: ToastrService,
    public mediaObserver: MediaObserver
  ) { }

  ngOnInit() {
    this.getAllWomenDress();
  }

  getAllWomenDress() {
    this.dressService.getWomenDresses().subscribe(data => {
      this.allWomenDress = data;
      console.log(this.allWomenDress);
    }, error => {

      this.toastr.error('getting dresses failed');
    });

  }

  openAddDressWomenDialog(): void {
    const dialogRef = this.dialog.open(AddDressWomenComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  deleteWomenDress(id: number, name:string){
   this.dialog.open(DeleteDressWomenComponent);
   this.dressService.setId(id);
   this.dressService.setName(name);
   
  }
  editWomenDress(id: number){
    this.dialog.open(EditDressWomenComponent);
    this.dressService.setId(id);
  }
}
