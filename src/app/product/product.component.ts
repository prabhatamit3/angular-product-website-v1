import { Component, OnInit } from '@angular/core';  
import { ProductService } from '../product-service.service';  
// Adjust the import path as necessary to where you placed your `product.ts`  
import { Product } from '../product';    
  
@Component({  
  selector: 'app-product',  
  templateUrl: './product.component.html',  
  styleUrls: ['./product.component.css']  
})  
export class ProductComponent implements OnInit {  
  // Use the Product interface for type safety. Initialize as an empty array of Product.  
  products: Product[] = [];    
      
  constructor(private productService: ProductService) { }  
  showNavLinks = false;  
  
  toggleNavLinks() {  
    this.showNavLinks = !this.showNavLinks;  
  } 
  // goBack() {  
  //   this.router.navigate(['/product']);  
  // }  
  
  ngOnInit(): void {  
    this.products = this.productService.getProducts();  
  }  
}  
