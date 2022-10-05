import { Component, OnInit } from '@angular/core';
// import { AuthService } from '../Services/auth.service';
// import { TokenService } from '../Services/token.service';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent{
  loginForm: FormGroup;
  submitted:false;
  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    
  }
}





// import { Component, OnInit } from '@angular/core';
// import { AuthService } from '../Services/auth.service';
// import { TokenService } from '../Services/token.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })

// export class LoginComponent implements OnInit {
//   form: any = {
//     username: null,
//     password: null
//   };
//   isLoggedIn = false;
//   isLoginFailed = false;
//   errorMessage = '';
//   roles: string[] = [];
//   constructor(private authService: AuthService, private tokenStorage: TokenService) { }
//   ngOnInit(): void {
//     if (this.tokenStorage.getToken()) {
//       this.isLoggedIn = true;
//       this.roles = this.tokenStorage.getUser().roles;
//     }
//   }
//   onSubmit(): void {
//     const { username, password } = this.form;
//     this.authService.login(username, password).subscribe({
//       next: data => {
//         this.tokenStorage.saveToken(data.accessToken);
//         this.tokenStorage.saveUser(data);
//         this.isLoginFailed = false;
//         this.isLoggedIn = true;
//         this.roles = this.tokenStorage.getUser().roles;
//         this.reloadPage();
//       },
//       error: err => {
//         this.errorMessage = err.error.message;
//         this.isLoginFailed = true;
//       }
//     });
//   }
//   reloadPage(): void {
//     window.location.reload();
//   }
// }