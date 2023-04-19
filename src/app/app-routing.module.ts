import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CartComponent } from './components/cart/cart.component';
import { BrandsComponent } from './components/brands/brands.component';
import { LoginComponent } from './components/login/login.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthGuard } from './services/auth.guard';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { ProductsComponent } from './components/products/products.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AllordersComponent } from './components/allorders/allorders.component';

const routes: Routes = [
  {path:'',redirectTo:'home', pathMatch:'full'},
  {path:'home',canActivate:[AuthGuard] ,component:HomeComponent,title:'Home'},
  {path:'about' , canActivate:[AuthGuard],component:AboutComponent,title:'About'},
  {path:'categories' ,canActivate:[AuthGuard],component:CategoriesComponent,title:'Categories'},
  {path:'cart',canActivate:[AuthGuard] ,component:CartComponent,title:'cart'},
  {path:'checkout/:cartId',canActivate:[AuthGuard] ,component:CheckoutComponent,title:'CheckOut'},
  {path:'allorders' ,component:AllordersComponent,title:'allorders'},
  {path:'products',canActivate:[AuthGuard] ,component:ProductsComponent,title:'Products'},
  {path:'productdetails/:id',canActivate:[AuthGuard] ,component:ProductdetailsComponent,title:'Product details'},
  {path:'brands', canActivate:[AuthGuard],component:BrandsComponent,title:'Brands'},
  {path:'login', component:LoginComponent, title:'Login'},
  {path:'signup', component:SignupComponent,title:'Signup'},
  {path:'settings' , loadChildren:()=> import("./settings/settings.module").then((m)=>m.SettingsModule)},
  {path:'**', component:NotfoundComponent,title:'404'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
