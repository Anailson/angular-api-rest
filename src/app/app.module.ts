//import { UsuarioComponent } from './componente/usuario/usuario/usuario.component';
import { NgModule, Component, ModuleWithComponentFactories } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { UsuarioComponent } from './componente/usuario/usuario/usuario.component';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component'  //Requisições Ajax
import { RouterModule, Routes } from '@angular/router';

import {ModuleWithProviders} from '@angular/compiler/src/core';
import { LoginComponent } from './login/login.component'
import { HttpInterceptorModule } from './Service/header-interceptor.service';
import { UsuarioAddComponent } from './componente/usuario-add/usuario-add.component';

/*DECLARANDO AS ROTAS */
export const appRouters: Routes = [
      {path: 'home', component: HomeComponent},
      {path: 'login', component: LoginComponent},
      {path: '', component: LoginComponent},
      {path: 'usuarioList', component: UsuarioComponent},
      {path: 'usuarioAdd', component: UsuarioAddComponent},
      {path: 'usuarioAdd/:id', component: UsuarioAddComponent},
];

export const routes : ModuleWithProviders = RouterModule.forRoot(appRouters);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UsuarioComponent,
    UsuarioAddComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    routes,
    HttpInterceptorModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
