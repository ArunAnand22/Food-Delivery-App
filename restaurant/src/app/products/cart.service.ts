import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartarray:any=[]//array
  cartlist=new BehaviorSubject([])//list
  grandtotal:any=0;
  updatedgrand:any=0;
  
  constructor() { }
  addtocart(product:any){
    this.cartarray.push(product)
    this.cartlist.next(this.cartarray)//stream of data
    let total=this.gettotal()
  }
//calculate grandtotal
  gettotal(){
    let grandtotal:number=0;
    this.cartarray.map((item:any)=>{
      grandtotal+=item.price
    })
    return grandtotal;
  }

  //remove single item inside cart table
  removecart(product:any){
    this.cartarray.map((item:any,index:any)=>{
      if(product.id==item.id){
        this.cartarray.splice(index,1)
      }
    })
    this.cartlist.next(this.cartarray);
  }

  //empty cartlist
  removeall(){
    this.cartarray=[]
    this.cartlist.next(this.cartarray)
  }

 
}
