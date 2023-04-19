import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isLogin:boolean = false
  numOfCartItems:number = 0
  constructor(private _AuthService:AuthService , private _CartService:CartService){
     this._AuthService.userData.subscribe({
      next:()=>{
        if(_AuthService.userData.getValue() !== null){
          this.isLogin=true
        }else{
          this.isLogin=false
        }
      },
// count cart
    })
    _CartService.numOfCartItems.subscribe({
      next:(value)=>{
        console.log(value);
        this.numOfCartItems= value}
    })
  }
  // logOuthmethod
  logOut(){
    return this._AuthService.logOut()
  }
}

