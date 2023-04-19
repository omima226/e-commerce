import { Component } from '@angular/core';
import { FormControl , FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  cartId:string =''
  constructor(private _CartService:CartService , private _ActivatedRoute:ActivatedRoute){
  this._ActivatedRoute.paramMap.subscribe({
     next: (params)=>{
      this.cartId = params.get("cartId")!
    },
    error:(err)=>{console.log(err);
    }
  })
  }
  shippingAddress:FormGroup = new FormGroup({
    details: new FormControl(null),
    phone: new FormControl(null),
    city: new FormControl(null)
  })
   // 643d2852a13a4900088cec04
   navigateToPage(url:string){
    location.href = url
   }
  handelSubmit(shippingAddress:FormGroup){
    console.log(shippingAddress.value);
    this._CartService.onlinePayment(shippingAddress.value , this.cartId).subscribe({
      next:(response)=>{
        this.navigateToPage(response.session.url)
      },
      error:(err)=>{console.log(err);
      }
    })
  }
}
