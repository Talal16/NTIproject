import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
@Injectable({
  providedIn: 'root'
})

export class AuthService {
  public userData = null
  public isLoggedin = false
  baseURL= "http://localhost:3000/user/"
  constructor(private _http: HttpClient) { }

  register(data:User):Observable<any>{
    return this._http.post(`${this.baseURL}register`,data)

  }

    login(id:string):Observable<any>{
      return this._http.post(`${this.baseURL}login`,id)
    }

    allUsers():Observable<any>{
      return this._http.get(`${this.baseURL}`)
    }
    sigleUsers(id:string):Observable<any>{
      return this._http.get(`${this.baseURL}/${id}`)
    }
    delete(id:string):Observable<any>{
      return this._http.delete(`${this.baseURL}single/${id}`)
    }

    editUser():Observable<any>{
      return this._http.get(`${this.baseURL}`)

    }
    profile():Observable<any>{
      return this._http.get(`${this.baseURL}profile`)
    }
    activate():Observable<any>{
      return this._http.get(`${this.baseURL}activate`)
    }
    imgUploud(data:any):Observable<any>{
      return this._http.post(`${this.baseURL}imgUploud`, data)
    }

    
}
