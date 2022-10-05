import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Model/UserProfile';
import { Login } from '../Model/login';
const API_URL = 'https://localhost:44304/api';
@Injectable({
  providedIn: 'root'
}) 


export class UserService {
  constructor(private http: HttpClient) { }

  CreateUser(user:User){
    return this.http.post(API_URL +'/'+"UserProfile"+'/'+"CreateUserProfile",user);
  }
  userLogin(login:Login): Observable<any> {
    var res = this.http.post(API_URL +'/'+"UserLogin"+'/'+"userLogin",login);
    // this.setUserId = login.email;
    return res;
  }

 
}
