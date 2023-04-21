import { Component, OnInit } from '@angular/core';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css']
})
export class ListRestoComponent implements OnInit {
  collection:any=[];

  constructor(private resto:RestoService){

  }
  ngOnInit(): void {
   this.resto.GetData().subscribe((res)=>{
    this.collection=res;


   })
  }

  deleteResto(item:any){

    this.collection.splice(item-1,1)
    this.resto.DeleteData(item).subscribe((result)=>{
      console.log(result)
    })
  }



}
