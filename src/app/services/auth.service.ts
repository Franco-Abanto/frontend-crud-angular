import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token: string | null = null;
  private apiUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  login(user: any): Observable<any> {
    const loginUrl = `${this.apiUrl}login`;
    return this.http.post<any>(loginUrl, user);
  }

  setToken(token: string): void {
    this.token = token;
    localStorage.setItem('auth_token', token);
  }

  getToken(): string | null {
    return this.token || localStorage.getItem('auth_token');
  }

  logout(): void {
    this.token = null;
    localStorage.removeItem('auth_token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
