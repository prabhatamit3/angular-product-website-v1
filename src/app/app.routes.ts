import { NgModule } from '@angular/core';  
import { Routes, RouterModule } from '@angular/router';  
import { HomeComponent } from './home/home.component';  
import { ContactComponent } from './contact/contact.component';  
import { ProductComponent } from './product/product.component';  
import { ProductDetailComponent } from './product-detail/product-detail.component';  
import { BrowserModule } from '@angular/platform-browser';    
import { AppComponent } from './app.component';  
export const routes: Routes = [  
  { path: '', redirectTo: '/home', pathMatch: 'full' },  
  { path: 'home', component: HomeComponent },  
  { path: 'contact', component: ContactComponent },  
  { path: 'product', component: ProductComponent },  
  { path: 'product-detail/:id', component: ProductDetailComponent }  
];  
  
@NgModule({
    declarations: [  
        ProductComponent,  
        ProductDetailComponent  
      ],  
  imports: [
    BrowserModule,  RouterModule.forRoot(routes)],  
  exports: [RouterModule]  ,
  providers: []
})  
export class AppRouteModule { }  

