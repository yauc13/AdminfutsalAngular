import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GameListComponent } from './components/game-list/game-list.component';
import { GameFormComponent } from './components/game-form/game-form.component';
import { ChampionshipListComponent } from './components/championship-list/championship-list.component';
import { ChampionshipFormComponent } from './components/championship-form/championship-form.component';
import { ChampionshipAdminComponent } from './components/championship-admin/championship-admin.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'games',
    component: GameListComponent
  },
  {
    path: 'games/add',
    component: GameFormComponent
  },
  {
    path: 'games/edit/:id',
    component: GameFormComponent
  },
  {
    path: 'championship',
    component: ChampionshipListComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'championship/add',
    component: ChampionshipFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'championship/edit/:id',
    component: ChampionshipFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'championship/admin/:id',
    component: ChampionshipAdminComponent,
    canActivate: [ AuthGuardService ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
