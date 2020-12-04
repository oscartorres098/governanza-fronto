import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = environment.serverURL;
  constructor(private http: HttpClient, private router: Router) { }

  signUpUser(user) {
    return this.http.post<any>(this.URL + '/user/signup', user);
  }

  signInUser(user) {
    return this.http.post<any>(this.URL + '/user/signin', user);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  isAdmin() {
    var isAdmin = localStorage.getItem('rol')=="Admin";
    return isAdmin;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/acercade']);
  }

  getToken() {
    return localStorage.getItem('token');
  }

}
