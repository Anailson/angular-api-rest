import { AppConstants } from './../app-constants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { error } from '@angular/compiler/src/util';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient, private router: Router) { }

  login(usuario:any){

      return this.http.post(AppConstants.baseLogin, JSON.stringify(usuario)).subscribe(data => {
        /*Retonno Http*/
        var token = JSON.parse(JSON.stringify(data)).Authorization.split(' ')[1];

        localStorage.setItem("token", token);

        console.info("Token: " + localStorage.getItem("token"));
        // - TESTA PRA IDENTIFICAR O TOKEN GERADO

        //Navegação
        this.router.navigate(['home']);

      },
        error => {
          console.error("Erro ao fazer o Login");
          alert('Acesso Negado!')
        }
      );
  }
}

