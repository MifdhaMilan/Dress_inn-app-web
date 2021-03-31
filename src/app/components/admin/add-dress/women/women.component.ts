import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddDressWomenComponent } from './add-dress-women/add-dress-women.component';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css']
})
export class WomenComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }
  openAddDressWomenDialog(): void {
    const dialogRef = this.dialog.open(AddDressWomenComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
