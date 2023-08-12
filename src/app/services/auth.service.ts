import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  login(user: any): Observable<any> {
    const loginUrl = `${this.apiUrl}login`;
    return this.http.post<any>(loginUrl, user);
  }
}
