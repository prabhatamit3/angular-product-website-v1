import { Component, OnInit } from '@angular/core';  
import { ActivatedRoute, Router } from '@angular/router';  
import { ProductService } from '../product-service.service';  
  
@Component({  
  selector: 'app-product-detail',  
  templateUrl: './product-detail.component.html',  
  styleUrls: ['./product-detail.component.css']  
})  
export class ProductDetailComponent implements OnInit {  
  product: any;  
  
  constructor(private route: ActivatedRoute,  
              private productService: ProductService,  
              private router: Router) { }  
  
  ngOnInit(): void {  
    const productId = this.route.snapshot.paramMap.get('id')!;  
    this.product = this.productService.getProducts().find(p => p.id === +productId);  
  }  
  
  goBack() {  
    this.router.navigate(['/product']);  
  }  
}  
