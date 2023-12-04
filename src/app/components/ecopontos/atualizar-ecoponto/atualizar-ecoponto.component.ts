import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { Iecopontos } from 'src/app/model/IEcoponto.model';
import { EcopontosService } from 'src/app/services/ecopontos.service';

@Component({
  selector: 'app-atualizar-ecoponto',
  templateUrl: './atualizar-ecoponto.component.html',
  styleUrls: ['./atualizar-ecoponto.component.css']
})
export class AtualizarEcopontoComponent implements OnInit {
  ecoponto: Iecopontos = {
    EcopontoNome: '',
    HoraFuncIn: 0,
    HoraFuncFim: 0,
    Endereco: '',
    NumEndereco: 0

  };

  constructor( private router: Router,
     private ecopontoservice: EcopontosService,
     private activatedRoute: ActivatedRoute   ) { }

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.ecopontoservice.buscarPorId(id).subscribe(retorno => { 
      this.ecoponto = retorno;
    });
  }


  salvarEcopontos(): void {
   this.ecopontoservice.Atualizar(this.ecoponto).subscribe(retorno =>{
    this.ecoponto = retorno;
    this.ecopontoservice.exibirMensagem(
      'Sistema',
      `${this.ecoponto.EcopontoNome} foi Atualizado com sucesso.`,
      'toast-sucess'
    );
    this.router.navigate(['Ecopontos/Ecopontos']);
    


    });
  }



}

