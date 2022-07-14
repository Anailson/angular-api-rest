import { Observable } from 'rxjs';
import { UsuarioService } from './../../../Service/usuario.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User';


@Component({
  selector: 'app-Usuario',
  templateUrl: './Usuario.component.html',
  styleUrls: ['./Usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  students : Observable<User[]>;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuarioService.getStudentList().subscribe(data => {
      this.students = data;
    });
  }

}
