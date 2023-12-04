import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


    public EcopontoNome: string = 'Ecoponto Tatuapé'
    public Endereco: string = `o ${this.EcopontoNome} fica na Cidade São Paulo na Av.Salim Farah Maluf, 179`;
    private HoraFuncIn: number = 8;
    private HoraFuncFim: number = 18;
    public Horafuncionamento: string = `Abre as 0${this.HoraFuncIn}.00 e fecha ${this.HoraFuncFim}.00`
    public IdEcoponto: number = 1001;



  constructor() {

    console.log('Nome do Ecoponto', this.EcopontoNome);
    console.log( this.Endereco);
    console.log('Esse Ecoponto', this.Horafuncionamento);
    console.log('Id:', this.IdEcoponto);

   }

  ngOnInit(): void {
  }

}
