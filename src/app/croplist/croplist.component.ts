import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-croplist',
  templateUrl: './croplist.component.html',
  styleUrls: ['./croplist.component.css']
})


export class CropListComponent implements OnInit {
  products: Array<any> = [];
  searchText: String = '';
  constructor(private cartService : CartService, private router:Router, private toast: ToastrService){}


  ngOnInit(): void {
  
    this.cartService.getCropList().subscribe(res=>{
if(res !=null){
 
  console.log(res)
  this.products = res;
}
    });
  }

  product: object;
  
  
  selectProduct(product: any) {
    if(product.selectedQty) {
      product.selectedQty = 1;
      product.total += product.price;
    } else {
      product.selectedQty = 1;
      product.total = product.price;
    }
    
    this.cartService.addtoCart(product);
    // this.router.navigate(['cart']);
    
  }

  searchCrop(event: any) {
    console.log(event.target.searchText.value);
    
    this.searchText = event.target.searchText.value;
    this.cartService.getCropList(this.searchText).subscribe(res=>{
      if(res !=null){
        console.log(res)
        this.products = [res];
      }
    });
  }

  createPath(path:any){
    return `https://localhost:44304/${path}`;
  }

  addToCart(product:any){
    this.toast.success("Item added successfully");
    
    let cart:any = 
      {
        CropListId: product.cropListId,
        CropName: product.cropName,
        Quantity:1,
        ImageUrl:product.imageUrl,
        Price:product.price,
        UserId: localStorage.getItem("UserId")
      }
    this.cartService.addCart(cart).subscribe(res=>{
      if(res !=null){
        console.log(res)
      
      }
    //this.cartService.addCart(product);
    this.router.navigate(['cart']);
  });
}
}