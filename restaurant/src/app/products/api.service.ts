import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getallproducts(){
    return this.http.get('http://localhost:3000/all-items')//json data
  }

  searchKey=new BehaviorSubject('')

  //add to wishlist
  addtowishlist(product:any){
    const body={
      id:product.id,
      name:product.name,
      category:product.category,
      image:product.image,
      price:product.price
    }
    return this.http.post('http://localhost:3000/addtowishlist',body)
  }
  //get wishlist
  getwishlist(){
    return this.http.get('http://localhost:3000/getwishlist')//json data
  }
  //delete wishlist
  deletewish(id:any){
    return this.http.delete('http://localhost:3000/deletewishlist/'+id)
  }
}
