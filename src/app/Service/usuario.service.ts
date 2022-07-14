import { AppConstants } from './../app-constants';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient ) {

   }
  // CARREGARA A LISTA DA API
   getStudentList(): Observable<any>{
    return this.http.get<any>(AppConstants.baseUrl);

   }
}
