
import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-allorders',
  templateUrl: './allorders.component.html',
  styleUrls: ['./allorders.component.css']
})
export class AllordersComponent {
  userId:string=''
  allorders:any=[]
constructor(private _CartService:CartService ){
  this._CartService.allorders().subscribe({
    next:(res)=>{
      console.log(res);

      this.allorders= res
    }
,
    error:(err)=>{console.log(err);
    }
  })
}
}
