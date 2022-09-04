import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../providers/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(public _auth:AuthService, private _router:Router) { }

  ngOnInit(): void {
    this.profile()
  }
  logout(){

        this._auth.isLoggedin = false
        this._auth.userData = null
        localStorage.removeItem('Authorization')
        
        this._router.navigateByUrl("/")
  }

  profile(){
    this._auth.profile().subscribe(
      res=>{
        this._auth.userData = res.data

      },
      e=>{
        this._auth.isLoggedin = false
        this._auth.userData = null
        this._router.navigateByUrl("/")
      },
      ()=>{
        this._auth.isLoggedin = true
      }

    )
    

  }

}
