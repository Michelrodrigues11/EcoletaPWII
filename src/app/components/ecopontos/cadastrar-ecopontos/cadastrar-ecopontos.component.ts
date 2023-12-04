import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Iecopontos } from 'src/app/model/IEcoponto.model';
import { EcopontosService } from 'src/app/services/ecopontos.service';


@Component({
  selector: 'app-cadastrar-ecopontos',
  templateUrl: './cadastrar-ecopontos.component.html',
  styleUrls: ['./cadastrar-ecopontos.component.css']
})
export class CadastrarEcopontosComponent implements OnInit {

  ecoponto: Iecopontos = {
    EcopontoNome: '',
    Endereco: '',

  };

  constructor( private router: Router, private ecopontoservice: EcopontosService) { }

  ngOnInit(): void {
  }


  salvarEcopontos(): void {
   this.ecopontoservice.cadastrar(this.ecoponto).subscribe(retorno =>{
    this.ecoponto = retorno;
    this.ecopontoservice.exibirMensagem(
      'Sistema',
      `${this.ecoponto.EcopontoNome} foi cadastrado com sucesso. ID: ${this.ecoponto.id}`,
      'toast-sucess'
    );
    this.router.navigate(['/Ecopontos/Ecopontos']);
    


    });
  }



}
