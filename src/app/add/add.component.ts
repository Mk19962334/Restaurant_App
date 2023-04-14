import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  constructor(){

    
  }


  HotelForm = new FormGroup({
    name: new FormControl(""),
    address: new FormControl(""),
    email: new FormControl(""),
    
  })


  AddRestaurant(){

    console.warn(this.HotelForm.value);

  }
}
