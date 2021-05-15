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
  dressId: number;
  dressName:string;


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
  public setId(id:number){
this.dressId = id;
  }
  public getId(){
return this.dressId;
  }
  public setName(name:string){
this.dressName = name;
  }
public getName(){
return this.dressName;
}
deleteMenDress(id: number) {
  return this.http.delete(this.apiUrl + '/dress/delete/' + id);
}
getDressById(id: number){
  return this.http.get(this.apiUrl +'/dress/find/'+id);
}
editMenDress(model:any){
  return this.http.put(this.apiUrl +'/dress/update', model);
}

}
