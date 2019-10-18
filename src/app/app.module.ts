import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 import {HttpClientModule} from '@angular/common/http';
 import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { GameFormComponent } from './components/game-form/game-form.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { ChampionshipListComponent } from './components/championship-list/championship-list.component';
import { GamesService } from './services/games.service';
import { ChampionshipService } from './services/championship.service';
import { ChampionshipFormComponent } from './components/championship-form/championship-form.component';
import { ChampionshipAdminComponent } from './components/championship-admin/championship-admin.component';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    GameFormComponent,
    GameListComponent,
    ChampionshipListComponent,
    ChampionshipFormComponent,
    ChampionshipAdminComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    GamesService,
    ChampionshipService,
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
