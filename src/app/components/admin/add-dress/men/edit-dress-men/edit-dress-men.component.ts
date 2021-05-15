import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Dress } from 'src/app/models/Dress';
import { DressService } from 'src/app/services/dress.service';

@Component({
  selector: 'app-edit-dress-men',
  templateUrl: './edit-dress-men.component.html',
  styleUrls: ['./edit-dress-men.component.css']
})
export class EditDressMenComponent implements OnInit {

  editDressMenForm: FormGroup;
  model: any = {};
  allMenDress: any;
  id: number;

  constructor(
    private dressService: DressService,
    private toastr: ToastrService,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.editDressMenForm = this.fb.group({
      Name: ['', Validators.required],
      Price: ['', Validators.required],
      ImageUrl: ['', Validators.required],

    });
    this.id = this.dressService.getId();

    this.dressService.getDressById(this.id).subscribe(data => {
      this.allMenDress = data;
      this.menDressEdit();
    });

  }
  menDressEdit() {
    this.editDressMenForm.controls["Name"].setValue(this.allMenDress.name);
    this.editDressMenForm.controls["Price"].setValue(this.allMenDress.price);
    this.editDressMenForm.controls["ImageUrl"].setValue(this.allMenDress.imageUrl);

  }
  reset() {
    this.editDressMenForm.controls["Name"].setValue(this.allMenDress.name);
    this.editDressMenForm.controls["Price"].setValue(this.allMenDress.price);
    this.editDressMenForm.controls["ImageUrl"].setValue(this.allMenDress.imageUrl);
  }
  onMenDressSubmit() {

    this.createJsonModel();
    console.log(this.model);
    this.dressService.editMenDress(this.model).subscribe(next => {
     this.toastr.success('Dress edited successfully');
    }, error => {

      this.toastr.error('Dress editing failed');
    });
  }

  createJsonModel() {
    this.model.name = this.editDressMenForm.get('Name').value;
    this.model.price = this.editDressMenForm.get('Price').value;
    this.model.imageUrl = this.editDressMenForm.get('ImageUrl').value;
  }


}
