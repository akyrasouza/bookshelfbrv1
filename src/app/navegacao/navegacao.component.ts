import { AutenticacaoFirebaseService } from './../servicosInterface/autenticacao-firebase.service';
import { AppLoginComponent } from './../app-login/app-login.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { NavegacaoService } from './../servicosInterface/navegacao.service';
import { MenuNavegador } from './../modelosInterface/menuNavegador';
import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { catchError,Observable, of } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navegacao',
  templateUrl: './navegacao.component.html',
  styleUrls: ['./navegacao.component.scss']
})
export class NavegacaoComponent {
  //traz a verificao de autenticacao do usuario
  usuario$ = this.autenticacaoFirebaseService.usuarioLogado$;
  //Itens do menu principal
  tituloNav= 'BookShelf v1';
  //Itens de icones e imagens de navegacao
  iconeGeral='../../assets/imagens/ShelfBook.png';
  lIcone= 80;
  aIcone= 80;
  //Controle das rotas do menu.
  itensMenu$: Observable<MenuNavegador[]>

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private telaLogin: MatDialog,
    private rotas: Router,
    private autenticacaoFirebaseService: AutenticacaoFirebaseService,
    private navegacaoService: NavegacaoService
    ) {

        this.itensMenu$= navegacaoService.listagemMenu()
        .pipe(
          catchError(error => {
            return of([])
          })
        )
    }

    abrirLogin(erroMsg: string){
      this.telaLogin.open(AppLoginComponent,{
        data:erroMsg
    })
  }

  sairUsuario(){
    this.autenticacaoFirebaseService.sairLogin().subscribe(() =>{
      this.rotas.navigate([''])
    })
  }

}
