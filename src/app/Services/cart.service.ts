import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserService } from './user.service';
const API_URL = 'https://localhost:44304/api';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList : any =[]
  public cropList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");

  constructor(private http: HttpClient, private userService:UserService) { }
  getProducts(){
    return this.cropList.asObservable();
  }

  getCropList(searchText:String = ''): Observable<any> {
    let url = API_URL +'/'+"CropList"+'/'+"GetCropList";
    if(searchText.length > 0) {
      let url = API_URL +'/'+"CropList"+'/'+"GetCropListByCropName/"+searchText;
    }
    return this.http.get(url);
  }

  addCart(cart:any){
    return this.http.post(API_URL +'/'+"Cart"+'/'+"CreateCart",cart);
  }

  getCart(): Observable<any> {
    let userId = localStorage.getItem("UserId");
    return this.http.get(API_URL +`/Cart/GetCartByName/${userId}`);
  }

  setProduct(product : any){
    this.cartItemList.push(...product);
    // this.cropList.next(product);
  }
  public addtoCart(product : any){
    this.cartItemList.push(product);
    this.cropList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList)
  }

  public updateCart(product: any) {
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id=== a.id){
        a.selectedQty = product.selectedQty;
        a.total = product.total;
        if(a.selectedQty == 0) {
          this.cartItemList.splice(index,1); 
        }
      }
    })

    this.cropList.next(this.cartItemList);
    this.getTotalPrice();
  }
  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }
  removeCartItem(product: any){
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id=== a.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.cropList.next(this.cartItemList);
  }
  removeAllCart(){
    this.cartItemList = []
    this.cropList.next(this.cartItemList);
  }

}


















