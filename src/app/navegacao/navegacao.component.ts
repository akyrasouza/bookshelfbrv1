import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { NavegacaoService } from './../servicosInterface/navegacao.service';
import { MenuNavegador } from './../modelosInterface/menuNavegador';
import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { catchError,Observable, of } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-navegacao',
  templateUrl: './navegacao.component.html',
  styleUrls: ['./navegacao.component.scss']
})
export class NavegacaoComponent {
  //Itens do menu principal
  tituloNav= 'BookShelf v1';
  usuario={userName: 'Akyra Souza', icone:'remember_me'};
  //Itens da barra superior
  tituloBarra= '[Sua Estante Virtual]';
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
    private navegacaoService: NavegacaoService
    ) {

        this.itensMenu$= navegacaoService.listagemMenu()
        .pipe(
          catchError(error => {
            return of([])
          })
        )
    }

}
