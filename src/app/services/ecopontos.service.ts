import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators'
import { ToastrService } from 'ngx-toastr'; 
import { error } from 'console';
import { Iecopontos } from '../model/IEcoponto.model';

@Injectable({
  providedIn: 'root'
})
export class EcopontosService {
  private Url: string = 'http://localhost:3000/ecopontos';

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  buscarTodos(): Observable<any> {
    return this.http.get<Iecopontos[]>(this.Url).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );
    

  }
  
  buscarPorId(id: Number ): Observable<Iecopontos> {
    return this.http.get<Iecopontos>(`${this.Url}/${id}`).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );
    

  }

  cadastrar(ecoponto: Iecopontos):Observable<Iecopontos>{
    return this.http.post<Iecopontos>(this.Url,ecoponto ).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
      );

  }

  
  Atualizar(ecoponto: Iecopontos):Observable<Iecopontos>{
    return this.http.put<Iecopontos>(`${this.Url}/${ecoponto.id}`,ecoponto).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
      );

  }

  Excluir(id: number):Observable<any>{
    return this.http.delete<any>(`${this.Url}/${id}`).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
      );

  }

  exibirErro(e: any): Observable<any> {
    this.exibirMensagem('Erro!', 'Não foi possivel realizar a operação! Requisição sem reposta.', 'toast-error');
    return EMPTY;
  }


  exibirMensagem(titulo: string, mensagem: string, tipo: string): void {
     this.toastr.show(mensagem, titulo, { closeButton: true, progressBar: true }, tipo);
  }
}
