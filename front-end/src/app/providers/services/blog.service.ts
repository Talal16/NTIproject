import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Blog } from 'src/app/models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  baseURL= "http://localhost:3000/"
  constructor(private _http:HttpClient) { }
  add(data:Blog):Observable<any>{
    return this._http.post(`${this.baseURL}reqister`,data)

  }

}
