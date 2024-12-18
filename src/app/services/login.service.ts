import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/Login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiUrl: string ="http://localhost:7209/api/User/"

  constructor(private http:HttpClient) { }

  onLogin(obj:LoginModel){
    return this.http.post(this.apiUrl +"login", obj )
  }

  onLogout() {
    localStorage.removeItem('jwtToken');
    return this.http.post(this.apiUrl + "logout", {});
  }
}
