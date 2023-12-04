import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './components/ecopontos/home/home.component';
import { ListarEcopontosComponent } from './components/ecopontos/listar-ecopontos/listar-ecopontos.component';
import { CadastrarEcopontosComponent } from './components/ecopontos/cadastrar-ecopontos/cadastrar-ecopontos.component';
import { AtualizarEcopontoComponent } from './components/ecopontos/atualizar-ecoponto/atualizar-ecoponto.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'Ecopontos/Ecopontos', component:ListarEcopontosComponent},
  {path:'Ecopontos/CadastrarEcopontos', component:CadastrarEcopontosComponent},
  {path:'Ecopontos/Atualizar/:id', component:AtualizarEcopontoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
