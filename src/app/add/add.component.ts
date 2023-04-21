import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  alert :boolean=false;

  constructor(private resto:RestoService){

    
  }


  HotelForm = new FormGroup({
    name: new FormControl(""),
    address: new FormControl(""),
    email: new FormControl(""),
    
  })


  AddRestaurant(){

    console.warn(this.HotelForm.value);
    this.resto.AddData(this.HotelForm.value).subscribe((res)=>{
      console.log(res)
      this.alert=true;
    })

  }
}
