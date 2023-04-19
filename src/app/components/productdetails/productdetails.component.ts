import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
constructor(private _ActivatedRoute:ActivatedRoute , private _ProductsService:ProductsService, private _CartService:CartService ){}
productDetails:any
  productId:any;
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((params)=>{
      this.productId = params.get('id')
    })
    this._ProductsService.getProductDetailes(this.productId).subscribe({
      next:(response)=>{
        this.productDetails = response.data

      }
    })
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: true
  }
  addToCart(productId:string){
    this._CartService.addTocart(productId).subscribe({
      next:(response)=>{console.log(response),
        this._CartService.numOfCartItems.next(response.numOfCartItems)
      console.error();

      }
    })
  }
}

