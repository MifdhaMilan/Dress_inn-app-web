import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { Dress } from 'src/app/models/Dress';
import { DressService } from 'src/app/services/dress.service';
import { AddDressMenComponent } from './add-dress-men/add-dress-men.component';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { DeleteDressMenComponent } from './delete-dress-men/delete-dress-men.component';
import { EditDressMenComponent } from './edit-dress-men/edit-dress-men.component';




@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent implements OnInit{
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
    this.dressService.getMenDresses().subscribe(data => {
      this.allMenDress = data;
      console.log(this.allMenDress);
    }, error => {

      this.toastr.error('getting dresses failed');
    });

  }

  openAddDressMenDialog(): void {
    const dialogRef = this.dialog.open(AddDressMenComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  deleteMenDress(id: number, name:string){
   this.dialog.open(DeleteDressMenComponent);
   this.dressService.setId(id);
   this.dressService.setName(name);
   
  }
  editMenDress(id: number){
    this.dialog.open(EditDressMenComponent);
    this.dressService.setId(id);
  }

}
