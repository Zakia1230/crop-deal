import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import custom validator to validate that password and confirm password fields match
import { MustMatch } from '../_helpers/must-match.validator';
import { UserService } from '../Services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder,private userService:UserService,private router:Router) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            userType: ['', Validators.required],
            userFirstName: ['', Validators.required],
            userLastName: ['', Validators.required],
            userEmail: ['', Validators.required],
            userMobileNumber: ['', Validators.required],
            userPassword: ['', Validators.required],  
        }); 
      
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;
        if(this.registerForm.invalid){
          return;
        }
        this.userService.CreateUser(this.registerForm.value)
          .subscribe( data => {
              localStorage.setItem('email',this.registerForm.value)
              
       
           
          });
         
          this.router.navigate(['farmerlogin']);
          this.registerForm.reset();
        // display form values on success
    }

    onReset() {
        this.submitted = false;
        this.registerForm.reset();
    }
}




