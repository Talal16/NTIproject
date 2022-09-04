import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/providers/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  errMsg:any ={}
  loginForm: FormGroup= new FormGroup({
  
    email:new FormControl('',Validators.required),
    password: new FormControl('',Validators.required) 
  })

  constructor(private _auth:AuthService, private _router:Router) { }

  ngOnInit(): void {
  }
  login(){
    let userData: any = this.loginForm.value
    this._auth.login(userData).subscribe(
      res=>{
        console.log(res);
        localStorage.setItem('Authorization', res.data.token)
        console.log(res.userData);
        
        this._auth.userData = res.data.userData
        this._auth.isLoggedin = true

        
      },
      e=>{
        if(e.error.message.includes("email"))this.errMsg.email = e.error.data.errors.email.message
        if(e.error.message.includes("password"))this.errMsg.password = e.error.data.errors.password.message


      },
      ()=>{
        this._router.navigateByUrl("/profile")
      }

    ) 
  
  }

}
