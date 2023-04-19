import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from './auth.service';



@Injectable({
  providedIn: 'root'
})
export class CartService {

numOfCartItems:BehaviorSubject<number>= new BehaviorSubject(0)
userId=this._AuthService.userId
  constructor(private _HttpClient:HttpClient , private _AuthService:AuthService) {
    this.getCartProducts().subscribe(
      (res)=>{this.numOfCartItems.next(res.numOfCartItems)
    console.log(res);
    })
  }

  addTocart(productId:string):Observable<any>
  {
    return this._HttpClient.post('https://route-ecommerce-app.vercel.app/api/v1/cart' ,
    {
      "productId":productId
    }
    )
  }
  getCartProducts():Observable<any>{
    return this._HttpClient.get('https://route-ecommerce-app.vercel.app/api/v1/cart' )
  }
  updateCartProducts(productId:string , count:number):Observable<any>{
    return this._HttpClient.put(
      `https://route-ecommerce-app.vercel.app/api/v1/cart/${productId}` ,
    {
      'count':count
    }

    )
  }
  removeCartProducts(productId:string):Observable<any>{
    return this._HttpClient.delete(
      `https://route-ecommerce-app.vercel.app/api/v1/cart/${productId}`,

    )
  }
  clearCartProducts():Observable<any>{
    return this._HttpClient.delete(
      `https://route-ecommerce-app.vercel.app/api/v1/cart`,

    )
  }
  onlinePayment(shippingAddress:any , cartId:string ):Observable<any>{
    return this._HttpClient.post(
      `https://route-ecommerce-app.vercel.app/api/v1/orders/checkout-session/${cartId}?url=http://localhost:4200` ,
    {
      shippingAddress:shippingAddress
    }

    )
  }

  allorders():Observable<any>{
    console.log(this.userId);
      return this._HttpClient.get(`https://route-ecommerce-app.vercel.app/api/v1/orders/user/${this.userId}`)
    }
}
