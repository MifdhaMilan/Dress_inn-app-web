import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dress } from '../models/Dress';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DressService {

  private apiUrl = environment.apiBaseUrl;


  constructor(private http : HttpClient) { }

  public getDresses(): Observable<Dress[]>{
    return this.http.get<Dress[]>(this.apiUrl +'/dress/all');
  }
  public addDress(model: any) {
    return this.http.post(this.apiUrl  + '/dress/add', model)
      .pipe(map((response: any) => {
        return response;
      }));
  }

}
