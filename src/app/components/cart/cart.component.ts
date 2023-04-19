import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartProducts:any[]=[]
clickSetTime:any
cartId:string = ''
constructor(private _CartService:CartService){}
  ngOnInit(): void {
    this._CartService.getCartProducts().subscribe({
      next:(response)=>{this.cartProducts = response.data.products
        this.cartId = response.data._id
      }
    })
  }
  updateCartProducts(productId:string , count:number){
    clearTimeout(this.clickSetTime)

   this.clickSetTime = setTimeout(() => {
    if(count==0){
      this._CartService.removeCartProducts(productId).subscribe(

      (response)=>{
        this.cartProducts = response.data.products
      this._CartService.numOfCartItems.next(response.numOfCartItems)
      }
      )

    }
    else{
       this._CartService.updateCartProducts(productId, count).subscribe(
        {
      next:(response)=>{this.cartProducts = response.data.products}
        })
      }

   },500);
  }
  removeCartProducts(productId:string){
    this._CartService.removeCartProducts(productId).subscribe({
      next:(response)=>{
        this.cartProducts = response.data.products;
        this._CartService.numOfCartItems.next(response.numOfCartItems)
      }

    })

  }
  clearAll(){
    this._CartService.clearCartProducts().subscribe({
      next:(response)=>{
        this.cartProducts = response.data.products
      }
    })
    this.cartProducts =[]
  }

}
