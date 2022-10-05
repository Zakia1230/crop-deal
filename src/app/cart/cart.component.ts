
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public cropList : any = [];
  public grandTotal !: number;
  public counter : number = 1; 
  public cart : Array<any> = [];
  public total : any = 0;
  constructor(private cartService : CartService, private router:Router) { }


  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.cropList = res;
      this.grandTotal = this.cartService.getTotalPrice();
    
    })

    this.cartService.getCart().subscribe(res=>{
      if(res !=null){
        this.cart=res;
        this.cart.forEach(element => this.total += element.total);
      
      }
    });
    
  }

  createPath(path:any){
    return `https://localhost:44304/${path}`;
  }

  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }

  emptycart(){
    this.cartService.removeAllCart();
  }

  addProductQtyToCart(product:any) {
    product.quantity += 1;
    product.total += product.price;

    this.getProducts()
    console.log(product); 
  }

   removeProductToCart(product:any) {
    this.cartService.removeCartItem(product);
    this.getProducts()
  }
  redirectToPaymentPage(){
    this.router.navigate(['payment']);
  }
}



























