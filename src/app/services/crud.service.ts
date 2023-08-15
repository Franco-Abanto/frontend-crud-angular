import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  private apiUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient, private authService: AuthService) {}

  getAuthorizationHeader(): HttpHeaders {
    const headersConfig = {
      'Content-Type': 'application/json',
      'x-access-token': this.authService.getToken() || '',
    };
    return new HttpHeaders(headersConfig);
  }

  listarEntidades(): Observable<any> {
    const headers = this.getAuthorizationHeader();
    return this.http.get(`${this.apiUrl}listarEntidades`, { headers });
  }

  crearEntidad(data: any): Observable<any> {
    const headers = this.getAuthorizationHeader();
    return this.http.post(`${this.apiUrl}crearEntidad`, data, { headers });
  }

  verEntidad(id_entidad: number): Observable<any> {
    const headers = this.getAuthorizationHeader();
    return this.http.get(`${this.apiUrl}verEntidad`, {
      params: { id_entidad },
      headers,
    });
  }

  actualizarEntidad(data: any): Observable<any> {
    const headers = this.getAuthorizationHeader();
    return this.http.post(`${this.apiUrl}actualizarEntidad`, data, { headers });
  }

  eliminarEntidad(id_entidad: number): Observable<any> {
    const headers = this.getAuthorizationHeader();
    return this.http.delete(`${this.apiUrl}eliminarEntidad/${id_entidad}`, {
      headers,
    });
  }

  //Listar para los select del formulario

  listarTipoContribuyente(): Observable<any> {
    const headers = this.getAuthorizationHeader();
    return this.http.get(`${this.apiUrl}listarTipoContribuyente`, {
      headers,
    });
  }

  listarTipoDocumento(): Observable<any> {
    const headers = this.getAuthorizationHeader();
    return this.http.get(`${this.apiUrl}listarTipoDocumento`, { headers });
  }
}
