import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-all-products',
  templateUrl: './view-all-products.component.html',
  styleUrls: ['./view-all-products.component.css']
})
export class ViewAllProductsComponent implements OnInit {

  productList:any;
  filterCategory:any;
  searchKey:any="";
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.viewAllProducts().subscribe(data=>{
      console.log(data)
      this.productList = data
    })
    this.productService.search.subscribe((value:any)=>{
      this.searchKey = value
  })
  }
filter(category:any){
  this.filterCategory = this.productList
  .filter((item:any)=>{
    if(item.categoryId== category || category==''){
      return item
    }
  })
}
}
