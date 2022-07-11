import { LoginServiceService } from './Service/login-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Curso-Angular-Rest';

  usuario = {login: '', senha:''};

  constructor(private loginService: LoginServiceService){}

  public login(){

      this.loginService.login(this.usuario);
  }


}
