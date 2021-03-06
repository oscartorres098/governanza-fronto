import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private URL = environment.serverURL;
  constructor(private http: HttpClient) { }

  getInfo() {
    return this.http.get<any>(this.URL + '/user/info');
  }

  getUsers() {
    return this.http.get<any>(this.URL + '/user/all');
  }

}
