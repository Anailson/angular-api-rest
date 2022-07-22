import { Observable } from 'rxjs';
import { UsuarioService } from 'src/app/Service/usuario.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User';


@Component({
  selector: 'app-root',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  //students : Observable<User[] >;
  students : User[] ;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuarioService.getStudentList().subscribe(data => {
      this.students = data;
      console.log(this.students);
    });
  }

}
