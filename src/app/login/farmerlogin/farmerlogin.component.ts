import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-farmerlogin',
  templateUrl: './farmerlogin.component.html',
  styleUrls: ['./farmerlogin.component.css']
})
export class FarmerloginComponent implements OnInit {
loginForm:FormGroup;
submitted=false;
  errorMessage: string;
  showError: boolean;
  constructor(private userService:UserService,private router:Router,protected http:HttpClient,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userType: ['', Validators.required],   
      Email: ['', Validators.required],
      Password: ['', Validators.required], 
  });
  }
//   onSubmit(){
//     this.submitted = true;
//     if(this.loginForm.invalid){
//       return;
//     }
//     this.userService.userLogin(this.loginForm.value)
//       .subscribe( data => {
         
//    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value, null, 4));
  
//         this.router.navigate(['cropList']);
//       });
//   }
// }



onSubmit() {    
  this.userService.userLogin(this.loginForm.value)
  .subscribe(res=>{
    localStorage.clear();
    localStorage.setItem("UserId",res.loginDetails.userId);
    localStorage.setItem("UserType",res.loginDetails.userType);
    localStorage.setItem("Name",res.loginDetails.userFirstName);
    //next: () => {
    //  localStorage.setItem("token", res.token);
    //  localStorage.setItem("role","Customer")
    //  localStorage.setItem("userId",JSON.stringify(res.userId))
    //  localStorage.setItem("name",res.userFirstName)
    //  localStorage.setItem("email",this.loginForm.controls.userEmail.value)
     //this.router.navigate(['cropList']);
     this.router.navigate(['cropList'])
     .then(() => {
     window.location.reload()});
  //},
  error: (err: HttpErrorResponse) => {
    alert("Invalid Credentials")
    this.errorMessage = err.message;
    this.showError = true;
  }})
}

showPassword() {
  const eye: any = document.getElementById("eye-icon");
  const password: any = document.getElementById("password");
  
  if (eye.classList.contains("close-eye")) {
    eye.classList.remove("close-eye");
    eye.classList.add("material-icons-remove_red_eye");
  } else {
    eye.classList.add("close-eye");
    eye.classList.remove("material-icons-remove_red_eye");
  }
  if (password.type == "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }

  console.log(password);
  
  // this._mainService.showPassword(eye, password);
}
}