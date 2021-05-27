import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DressService } from 'src/app/services/dress.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private dressService: DressService
  ) { }

  ngOnInit() {
  }
  inToAdmin(){
    this.router.navigate(['/admin'])
    .then(() => {
      window.location.reload();
    });
    // this.router.navigateByUrl('/admin');
  }
  inToUser(){
    this.router.navigate(['/user'])
    .then(() => {
      window.location.reload();
    });
    // this.router.navigateByUrl('/user');
  }
}
