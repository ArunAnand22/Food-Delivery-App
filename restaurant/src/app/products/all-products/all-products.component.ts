import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent {

  allProducts:any=[];//array of products
  searchTerm:any;

  constructor(private api:ApiService,private cart:CartService){}

  ngOnInit():void{
    this.api.getallproducts().subscribe(
      (data:any)=>{
        this.allProducts=data.product
      }
    )

    this.api.searchKey.subscribe(
      (data:any)=>{
        this.searchTerm=data
      }
    )
  }
  addtowishlist(product:any){
    this.api.addtowishlist(product).subscribe(
      (result:any)=>{
        alert(result.message)//true
      },
      (result:any)=>{
        // alert(result.error.message)//false  
        alert("Failure")
      }
    )
  }
  addtocart(product:any){
    this.cart.addtocart(product)
  }
}
