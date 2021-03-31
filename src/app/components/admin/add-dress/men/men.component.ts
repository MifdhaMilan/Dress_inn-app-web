import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DressService } from 'src/app/services/dress.service';
import { AddDressMenComponent } from './add-dress-men/add-dress-men.component';



@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent implements OnInit {


  constructor(
    private dressService: DressService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    
  }

  openAddDressMenDialog(): void {
    const dialogRef = this.dialog.open(AddDressMenComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
