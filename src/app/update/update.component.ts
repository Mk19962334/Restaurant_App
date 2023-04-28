import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RestoService } from '../resto.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  ngOnInit(): void {
    console.warn(this.router.snapshot.params['id'])
    this.resto.GetCurrentResto(this.router.snapshot.params['id']).subscribe((res)=>{
      console.log(res)
    })
  }

  editresto = new FormGroup({
    name: new FormControl(""),
    address: new FormControl(""),
    email: new FormControl(""),
    
  })


constructor(private router :ActivatedRoute, private resto:RestoService){



}

}
