import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestoService {

  constructor(private http:HttpClient) { }
  url="http://localhost:3000/restaurant";

  GetData(){

    return this.http.get(this.url)

  }

  AddData(data:any){
    return this.http.post(this.url,data)
  }



}
