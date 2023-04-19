import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProductsService } from 'src/app/services/products.service';
@Component({
  selector: 'app-catslider',
  templateUrl: './catslider.component.html',
  styleUrls: ['./catslider.component.css']
})
export class CatsliderComponent implements OnInit {
  categories:any[]=[]
  constructor(private _ProductsService:ProductsService){}
  ngOnInit(): void {
      this._ProductsService.getProductCategories().subscribe({
        next:(response)=>{
          this.categories= response.data
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
        items: 7
      }
    },
    nav: true
  }
}
