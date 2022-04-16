import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/auth/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }
  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username,
      password
    }, httpOptions);
  }

  register(username: string, email: string, password: string, isStudent: boolean, name: String): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username,
      email,
      password,
      isStudent,
      name
    }, httpOptions);
  }
  add_news(text: string, user_id: any, user_name: any): Observable<any> {
    return this.http.post(AUTH_API + 'add_news', {
      text,
      user_id,
      user_name
    }, httpOptions);
  }
}

