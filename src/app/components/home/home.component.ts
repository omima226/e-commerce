import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products:any[] = []
  searchTerm:string = ''
  constructor(private _ProductsService:ProductsService , private _CartService:CartService){}
  ngOnInit(): void {
    this._ProductsService.getProducts().subscribe({
      next:(response)=> this.products = response.data
    })
  }
  addToCart(productId:string){
    this._CartService.addTocart(productId).subscribe(
      (response)=>{console.log(response)
        this._CartService.numOfCartItems.next(response.numOfCartItems)
      console.error();
      }
    )
  }
}
