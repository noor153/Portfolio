import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, observable } from 'rxjs';
import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private _HttpClient:HttpClient,private _Router:Router) {
    this.saveNewUser()
   }

   saveNewUser(){
    var check = localStorage.getItem('token')

    if(check){
      var token = this.getDecodedAccessToken(check)
      this.logedin.next(token)
      this.fn = token.first_name
    }
    else{
      this.logedin.next(null)
    }
   }

  register(data:any):Observable<any>{
    console.log("reg");
    return this._HttpClient.post('./moviedb/register',data)
  }

  login(data:any):Observable<any>{
    return this._HttpClient.post('./moviedb/login',data)
  }

  logedin = new BehaviorSubject(null)

  fn:any
  

  islogout(){
    this.logedin.next(null)
    localStorage.removeItem('token')
    this._Router.navigate(['moviedb/login'])
  }


  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch(Error) {
      return null;
    }
  }
}
