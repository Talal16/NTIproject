import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/providers/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userName:any;
  userAge:any;
  createdDate:any;
  email:any;  

  constructor(private _auth:AuthService) { }

  ngOnInit(): void {
   
  this.userName = this._auth.userData?.["name"]
  this.userAge = this._auth.userData?.["age"]

  this.email = this._auth.userData?.["email"]

  this.createdDate = this._auth.userData?.["createdAt"]

   

  }


}
