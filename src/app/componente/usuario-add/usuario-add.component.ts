import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './usuario-add.component.html',
  styleUrls: ['./usuario-add.component.css']
})
export class UsuarioAddComponent implements OnInit {

  constructor(private routerActive: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.routerActive.snapshot.paramMap.get('id');

    if(id != null){
        console.log('Valor sendo editado : ' + id);
    }
  }

}
