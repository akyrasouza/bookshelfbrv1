import { MenuNavegador } from './../modelosInterface/menuNavegador';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavegacaoService {

  //EndPoint
  private readonly uriAPI= '../../assets/menuNavegador.json';

  //Injetor de Dados
  constructor(private menuDados: HttpClient) { }

  listagemMenu(){
    return this.menuDados.get<MenuNavegador[]>(this.uriAPI)
    .pipe(
      first(),//para não repetir a busca, ele pega a informacao e guarda
      tap(apiMenu => console.log(apiMenu))//trata o Observable e traz de acordo com a interface
    )
  }
}
