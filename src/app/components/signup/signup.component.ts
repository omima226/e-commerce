import { group } from '@angular/animations';
import { Component } from '@angular/core';
import{FormGroup, FormControl, Validators}from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private _AuthService : AuthService , private _Router:Router){
    if(localStorage.getItem('userToken') !== null){
      _Router.navigate(['/home'])
    }
  }
  isLoding:boolean= false;
  apiError:string=''
 registerForm : FormGroup = new FormGroup ({
  name: new FormControl(null,[Validators.required,Validators.minLength(3) , Validators.maxLength(10)]),
  email: new FormControl(null , [Validators.required , Validators.email]),
  password: new FormControl(null , [Validators.required ,Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)]),
  rePassword: new FormControl(null , [Validators.required ,Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)]),
  phone: new FormControl(null , [Validators.required , Validators.pattern(/^01[0125][0-9]{8}$/)]),
 } , {validators:this.rePasswordMatch})
 rePasswordMatch(registerForm:any){
  let passwordControl = registerForm.get('password')
  let rePasswordControl = registerForm.get('rePassword')
  if(passwordControl.value=== rePasswordControl.value){
    return null
  }else{
    rePasswordControl.setErrors({ passwordMatch:'password and rePassword not match'})
   return{ passwordMatch:'password and rePassword not match'}
  }

 }
 handelRegister(registerForm:FormGroup){
  this.isLoding = true
  if(registerForm.valid){
    // register
    this._AuthService.register(registerForm.value).subscribe({
      next:(response)=>{
        if(response.message ==='success'){
          this.isLoding=false;
          this._Router.navigate(['/login'])
          // navigate login
        }
      },
      error:(err)=>
      {
        this.isLoding=false;
        this.apiError = err.error.errors.msg;
      }
    })
  }
}
}
