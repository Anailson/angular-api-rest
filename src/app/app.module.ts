import { NgModule, Component, ModuleWithComponentFactories } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component'  //Requisições Ajax
import { RouterModule, Routes } from '@angular/router';

import {ModuleWithProviders} from '@angular/compiler/src/core';
import { LoginComponent } from './login/login.component'

/*DECLARANDO AS ROTAS */
export const appRouters: Routes = [
      {path: 'home', component: HomeComponent},
      {path: 'login', component: LoginComponent},
      {path: '', component: LoginComponent},
];

export const routes : ModuleWithProviders = RouterModule.forRoot(appRouters);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
