import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { DressService } from 'src/app/services/dress.service';

@Component({
  selector: 'app-add-dress-men',
  templateUrl: './add-dress-men.component.html',
  styleUrls: ['./add-dress-men.component.css']
})
export class AddDressMenComponent implements OnInit {
  Name: string;
  price: number;
  imageUrl: string;
  addDressMenForm: FormGroup;
  model: any = {};
  
  constructor(
    public dialogRef: MatDialogRef<AddDressMenComponent>,
    private fb: FormBuilder, 
    private dressService: DressService,

    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.menDressAdd();
  }
  menDressAdd(){
    this.addDressMenForm = this.fb.group({
     Name: ['',Validators.required],
     Price: ['',Validators.required],
     ImageUrl: ['',Validators.required],


    });

  }
  onMenDressSubmit(){
   
    this.createJsonModel();
    console.log(this.model);
    this.dressService.addDress(this.model).subscribe(next => {
     
 
    });
    

  }

  createJsonModel(){
    this.model.name = this.addDressMenForm.get('Name').value;
    this.model.price = this.addDressMenForm.get('Price').value;
    this.model.imageUrl = this.addDressMenForm.get('ImageUrl').value;
    
  }

}
