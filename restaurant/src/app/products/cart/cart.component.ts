import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartitem:any=[];//array of data
  grandtotal:any;
  updatedgrand:any;
constructor(private cart:CartService,private router:Router){}
ngOnInit():void{
  this.cart.cartlist.subscribe(
    (data:any)=>{
      console.log(data);
      this.cartitem=data
    }
  )
  this.grandtotal=this.cart.gettotal()
}

remove(product:any){
this.cart.removecart(product)//update cartlist
}
removeall(){
  this.cart.removeall()
}
//discount
 //grandtotal according to discount
 discount5per(){
  let discount=(this.grandtotal*5)/100
  this.updatedgrand=this.grandtotal-discount
}
discount10per(){
  let discount=(this.grandtotal*10)/100
  this.updatedgrand=this.grandtotal-discount
}
discount15per(){
  let discount=(this.grandtotal*15)/100
  this.updatedgrand=this.grandtotal-discount
}

//proceed
proceed(){
  alert('Your order is placed');
  this.router.navigateByUrl('/');
}
  
}

