import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { DressService } from 'src/app/services/dress.service';

@Component({
  selector: 'app-add-dress-women',
  templateUrl: './add-dress-women.component.html',
  styleUrls: ['./add-dress-women.component.css']
})
export class AddDressWomenComponent implements OnInit {

  Name: string;
  price: number;
  imageUrl: string;
  addDressWomenForm: FormGroup;
  model: any = {};
  
  constructor(
    public dialogRef: MatDialogRef<AddDressWomenComponent>,
    private fb: FormBuilder, 
    private dressService: DressService,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.womenDressAdd();
  }
  womenDressAdd(){
    this.addDressWomenForm = this.fb.group({
     Name: ['',Validators.required],
     Price: ['',Validators.required],
     ImageUrl: ['',Validators.required],


    });

  }
  onWomenDressSubmit(){
   
    this.createJsonModel();
    console.log(this.model);
    

  }

  createJsonModel(){
    this.model.name = this.addDressWomenForm.get('Name').value;
    this.model.price = this.addDressWomenForm.get('Price').value;
    this.model.imageUrl = this.addDressWomenForm.get('ImageUrl').value;
    
  }

}
