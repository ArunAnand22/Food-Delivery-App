import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { BookingComponent } from './booking/booking.component';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';


const routes: Routes = [
  { path: '', component: AllProductsComponent },//4200/allproducts
  { path: 'cart',component: CartComponent },//4200/cart
  { path: 'wishlist',component: WishlistComponent},//4200/wishlist
  { path: 'booking',component: BookingComponent},//4200/booking
  { path:'about-page', component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
