import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Dress } from 'src/app/models/Dress';
import { DressService } from 'src/app/services/dress.service';

@Component({
  selector: 'app-edit-dress-women',
  templateUrl: './edit-dress-women.component.html',
  styleUrls: ['./edit-dress-women.component.css']
})
export class EditDressWomenComponent implements OnInit {

  editDressWomenForm: FormGroup;
  model: any = {};
  allMenDress: any;
  id: number;

  constructor(
    private dressService: DressService,
    private toastr: ToastrService,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.editDressWomenForm = this.fb.group({
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
    this.editDressWomenForm.controls["Name"].setValue(this.allMenDress.name);
    this.editDressWomenForm.controls["Price"].setValue(this.allMenDress.price);
    this.editDressWomenForm.controls["ImageUrl"].setValue(this.allMenDress.imageUrl);

  }
  reset() {
    this.editDressWomenForm.controls["Name"].setValue(this.allMenDress.name);
    this.editDressWomenForm.controls["Price"].setValue(this.allMenDress.price);
    this.editDressWomenForm.controls["ImageUrl"].setValue(this.allMenDress.imageUrl);
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
    this.model.id = this.id;
    this.model.name = this.editDressWomenForm.get('Name').value;
    this.model.price = this.editDressWomenForm.get('Price').value;
    this.model.imageUrl = this.editDressWomenForm.get('ImageUrl').value;
    this.model.type = "W";
    this.model.status = "Available";
  }


}
