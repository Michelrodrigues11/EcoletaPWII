import { Observable } from 'rxjs';
import { EcopontosService } from 'src/app/services/ecopontos.service';
import { Component, OnInit } from '@angular/core';
import { Iecopontos} from '../../../model/IEcoponto.model'
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';


@Component({
  selector: 'app-listar-ecopontos',
templateUrl:'./listar-ecopontos.component.html',
  styleUrls: ['./listar-ecopontos.component.css']
  
})
export class ListarEcopontosComponent implements OnInit {

  listaEcopontos: Iecopontos[] = [
 
  
  ]

  constructor(private ecopontosService: EcopontosService) {
    

    for (let item of this.listaEcopontos)
    {
      console.log(item);
    }

  }


  ngOnInit(): void {
    this.carregarEcopontos();
  }
  
  deletar(produto: Iecopontos): void{
    this.ecopontosService.Excluir(produto.id!).subscribe(() =>{ // subscribe é para enviar o nosso pedido 
      this.ecopontosService.exibirMensagem( 
      'SISTEMA',
      `${produto.EcopontoNome} foi excluido com sucesso!`,
      'toast-error'
      );
      this.carregarEcopontos();
    });
  }
  
  carregarEcopontos(): void{
    this.ecopontosService.buscarTodos().subscribe(retorno =>{
      this.listaEcopontos = retorno;
    })

  }


    

}
