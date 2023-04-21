import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {

  editresto = new FormGroup({
    name: new FormControl(""),
    address: new FormControl(""),
    email: new FormControl(""),
    
  })

}
