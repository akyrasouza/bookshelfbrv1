import { DashboardService } from './../servicosInterface/dashboard.service';
import { Dashboard } from './../modelosInterface/dashboard';
import { Component } from '@angular/core';
import { map, shareReplay } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { catchError,Observable, of } from 'rxjs';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent {
  /** Based on the screen size, switch from standard to one column per row */
 usuario = {userName:'Akyra Souza', icone:'remember_me'}
 cards$: Observable<Dashboard[]>
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [];
      }

      return this.cards$;
    })
  );

  //Chama os Serviços
  constructor(
    private breakpointObserver: BreakpointObserver,
    private dashboardService: DashboardService
    ) {
      this.cards$= dashboardService.listagemCards()
      .pipe(
        catchError(error => {
          return of([])
        })
      )
    }
}
