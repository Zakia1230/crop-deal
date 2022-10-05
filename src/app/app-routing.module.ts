import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CropListComponent } from './croplist/croplist.component';
import { HomeComponent } from './home/home.component'
import { CartComponent } from './cart/cart.component';
import { ContactusComponent } from './contactus/contactus.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FarmerloginComponent } from './login/farmerlogin/farmerlogin.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  { path: '', redirectTo: "/home", pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'cart', component: CartComponent },
  { path: 'cropList', component: CropListComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'farmerlogin', component:FarmerloginComponent },
  { path: 'dealerlogin', component:FarmerloginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'payment', component: PaymentComponent },
   { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
