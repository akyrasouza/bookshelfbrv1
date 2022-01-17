import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMaterialModule } from './app-compartilhado/app-material/app-material.module';
import { NavegacaoComponent } from './navegacao/navegacao.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    NavegacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppMaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*
  BrowserModule:
    Configura um aplicativo baseado em navegador
    para fazer a transição de um aplicativo renderizado pelo servidor.

  BrowsrAnimationsModule:
    Exporta 'BrowserModule' com provedores adicionais [de injeção de dependência](guia/glossário#provider)
    --para uso com animações.Ex: Spinner

  HttpClienteModulo:
    Configura suporte de proteção XSRF
    para solicitações de saída.
*/
