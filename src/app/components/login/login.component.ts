import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import{FormGroup, FormControl, Validators}from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private _AuthService : AuthService , private _Router:Router){
    if(localStorage.getItem('userToken') !== null){
      _Router.navigate(['/home'])
    }
  }
  isLoding:boolean= false;
  apiError:string=''
 loginForm : FormGroup = new FormGroup ({
  email: new FormControl(null , [Validators.required , Validators.email]),
  password: new FormControl(null , [Validators.required ,Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)]),
 })
 handelLogin(loginForm:FormGroup){
  this.isLoding = true
  if(loginForm.valid){
    console.log('se');

    // register
    this._AuthService.login(loginForm.value).pipe(finalize(()=>{
      console.log('done');

    })).subscribe({
      next:(response)=>{
        console.log(response);

        if(response.message ==='success'){
          localStorage.setItem('userToken' , response.token)
          this._AuthService.decodeUserData()
          this.isLoding=false;
          this._Router.navigate(['/home'])
          // navigate login
        }
      },
      error:(err:HttpErrorResponse)=>
      {
        this.isLoding=false;
        console.log(err.error.message);


      }

    })
  }
 }
}
