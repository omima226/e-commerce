import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
ProductsService


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories:any[]=[]
  constructor(private _ProductsService:ProductsService){}
  ngOnInit(): void {
      this._ProductsService.getProductCategories().subscribe({
        next:(response)=>{
          this.categories= response.data
        }
      })
  }
}
