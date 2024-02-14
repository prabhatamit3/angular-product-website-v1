import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';  

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'productInfo';  
  showNavLinks = false;  
  constructor(private route: ActivatedRoute,  
    private router: Router) { } 
  toggleNavLinks() {  
    this.showNavLinks = !this.showNavLinks;  
  }  
  gocontact() {  
    this.router.navigate(['/contact']);  
  } 
  gohome() {  
    this.router.navigate(['/home']);  
  } 
  goproduct() {  
    this.router.navigate(['/product']);  
  }  
}

 

