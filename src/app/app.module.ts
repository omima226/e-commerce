import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CartComponent } from './components/cart/cart.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './components/signup/signup.component';
import{HTTP_INTERCEPTORS, HttpClientModule}from'@angular/common/http';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MainsliderComponent } from './components/mainslider/mainslider.component';
import { CatsliderComponent } from './components/catslider/catslider.component';
import { ProductsComponent } from './components/products/products.component';
import { BuyPipe } from './pipes/buy.pipe';
import { SeemorePipe } from './pipes/seemore.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AllordersComponent } from './components/allorders/allorders.component'
import { HeaderInterceptor } from './interceptors/header.interceptor';





@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BrandsComponent,
    CartComponent,
    CategoriesComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    NotfoundComponent,
    SignupComponent,
    ProductdetailsComponent,
    MainsliderComponent,
    CatsliderComponent,
    ProductsComponent,
    BuyPipe,
    SeemorePipe,
    SearchPipe,
    CheckoutComponent,
    AllordersComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,

  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:HeaderInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
