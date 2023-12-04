import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastrarEcopontosComponent } from './components/ecopontos/cadastrar-ecopontos/cadastrar-ecopontos.component';
import { ListarEcopontosComponent } from './components/ecopontos/listar-ecopontos/listar-ecopontos.component';
import { HomeComponent } from './components/ecopontos/home/home.component';
import { HeaderComponent } from './template/header/header.component';
import { FormsModule } from '@angular/forms';
import { AtualizarEcopontoComponent } from './components/ecopontos/atualizar-ecoponto/atualizar-ecoponto.component';

@NgModule({
  declarations: [
    
    AppComponent,
    CadastrarEcopontosComponent,
    ListarEcopontosComponent,
    HomeComponent,
    HeaderComponent,
    AtualizarEcopontoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,  
     BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    SweetAlert2Module.forRoot(), // ToastrModule added
    SweetAlert2Module,
    
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
