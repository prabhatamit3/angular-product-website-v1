import { Injectable } from '@angular/core';  
import { Product } from './product'; // Adjust the path according to where you placed your `product.ts`

@Injectable({  
  providedIn: 'root'  
})  
export class ProductService {  
  private products: Product[] = [  
    {  
      id: 1,  
      name: 'iPhone 12',  
      description: '5.4-inch display',  
      imageUrl: 'https://m.media-amazon.com/images/I/31jQ91XUDhS._SY445_SX342_QL70_FMwebp_.jpg',  
      buyLink: "https://www.amazon.in/New-Apple-iPhone-12-256GB/dp/B0932RLX4G",  
      price: 699.99,  
      summary: 'The iPhone 12 features an A14 Bionic chip, dual-camera system, and Super Retina XDR display.'  
    },  
    {  
      id: 2,  
      name: 'iPad Pro',  
      description: '11-inch display',  
      imageUrl: 'https://m.media-amazon.com/images/I/31Wj0j4RXhL._SY445_SX342_QL70_FMwebp_.jpg',  
      buyLink: "https://www.amazon.in/Apple-12-9-inch-iPad-Pro-Wi-Fi-128GB/dp/B0BJMVHRN9",  
      price: 799.99,  
      summary: 'The iPad Pro features a powerful M1 chip, Liquid Retina display, and compatibility with the Apple Pencil and Magic Keyboard.'  
    },  
    {  
      id: 3,  
      name: 'MacBook Pro',  
      description: '13-inch display',  
      imageUrl: 'https://m.media-amazon.com/images/I/41UnYGu7AGL._SY445_SX342_QL70_FMwebp_.jpg',  
      buyLink: "https://www.amazon.in/2022-Apple-MacBook-Laptop-chip/dp/B0B3BMKMGP",  
      price: 1299.99,  
      summary: 'The MacBook Pro offers incredible performance with its M1 chip, active cooling system, and stunning Retina display.'  
    },  
    {  
      id: 4,  
      name: 'OnePlus 9',  
      description: '6.55-inch display',  
      imageUrl: 'https://m.media-amazon.com/images/I/41EZvwgHQCL._SX300_SY300_QL70_FMwebp_.jpg',  
      buyLink: "https://www.amazon.in/Renewed-OnePlus-5G-Astral-Storage/dp/B0BS927RST",  
      price: 729.00,  
      summary: 'The OnePlus 9 offers a Hasselblad camera for mobile, 120 Hz Fluid Display, and Warp Charge 65.'  
    }  
    
    // Add more products as needed  
  ];  
   
  
  
  constructor() { }  
  
  getProducts() {  
    return this.products;  
  }  
  
  getProductById(id: number) {  
    return this.products.find(product => product.id === id);  
  }  
}  

