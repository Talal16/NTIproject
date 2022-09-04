import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/providers/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  registerForm: FormGroup= new FormGroup({
    name: new FormControl('', Validators.required),
    email:new FormControl(),
    password: new FormControl() 
  })

  
  errMsg: any ={}
  constructor(private _auth:AuthService, private _router:Router) { }

  ngOnInit(): void {
  }

  register(){
    let userData: User = this.registerForm.value
    console.log(userData);
    
    this._auth.register(userData).subscribe(
      res=>{
        console.log(res);
        console.log(userData);
        
        
      },
      e=>{
        if(e.error.message.includes("name"))this.errMsg.name = e.error.data.errors.name.message
        if(e.error.message.includes("email"))this.errMsg.email = e.error.data.errors.email.message
        if(e.error.message.includes("password"))this.errMsg.password = e.error.data.errors.password.message


      },
      ()=>{

        this._router.navigateByUrl("/login")
      }
    ) 

  }

}
