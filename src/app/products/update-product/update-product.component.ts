import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  productId:any;
  productDetails:any;
  constructor(private router:Router,private activateRoute:ActivatedRoute,private productService:ProductService){}
  // constructor(private router:Router,private activateRoute:ActivatedRoute,private productService:ProductService){

  
ngOnInit(): void {

  this.activateRoute.params.subscribe((data:any)=>{
  this.productId = data['id']
  } )

  this.productService.viewProduct(this.productId).subscribe((item:any)=>{
    this.productDetails = item
  } )
  }
updateProduct(form:any){
  
  let updateProduct={
    id: form.value.id ,
    productName: form.value.productName,
    CategoryId: form .value.CategoryId,
    Description:  form.value.Description,
    Price:  form.value. Price,
    Is_available:  form.value.Is_available,
    productmg:  form.value.productmg,
    rating: form .value. rating,
    review: form.review,
    vendor_name:  form.value.vendor_name,
    warranty:  form.value.warranty
  }
this.productService.updateProduct(this.productId,updateProduct).subscribe((data:any)=>{
  alert("update successfully")
  this.router.navigateByUrl("products")
})

}
}
