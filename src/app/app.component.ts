import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CropDeal';
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;
  loggedIn:boolean;
  isFarmer:boolean;
  Name:any;
  constructor(private router:Router) { }
  ngOnInit(): void {
   
    if (this.isLoggedIn) {
     
      // this.roles = user.roles;
    
      // this.username = user.username;
    }
    this.checkUserLoggedIn();
    this.Name = localStorage.getItem("Name");
    if(localStorage.getItem("UserType") == 'Farmer'){
      this.isFarmer = false
    }else{
      this.isFarmer = true
    }
  }

  logoutMe(){
    this.loggedIn  =false;
    localStorage.clear();
    this.router.navigate(['farmerlogin'])
.then(() => {
window.location.reload();
});
    
    //this.router.navigate(['farmerlogin']);
  }

  checkUserLoggedIn(){
    if(localStorage.length==0){
      this.loggedIn  =false;
    }
    else{
      this.loggedIn  =true;
    }
  }



  redirectPage(rediectionType:number = 1) {
    switch (rediectionType) {
      case 1:
        this.router.navigate(['/home']);   
        break;
      case 2:
        this.router.navigate(['/cropList']);   
        break;
      case 3:
        this.router.navigate(['/cart']);   
        break;
      case 4:
        this.router.navigate(['/contactus']);   
        break;
      case 5:
        this.router.navigate(['/farmerlogin']);   
        break;
      case 6:
        this.router.navigate(['/register']);   
        break;
      default:
        this.router.navigate(['/home']);  
        break;
    }
  }
}
