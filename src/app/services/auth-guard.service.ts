import { Injectable } from '@angular/core';
import { Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivate
}  from "@angular/router";
import { AuthService } from "./auth.service";

/*servicio para el bloqueo de rutas sin autenticacion */

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService  implements CanActivate  {

  constructor(private auth:AuthService) { }

  canActivate(next:ActivatedRouteSnapshot, state: RouterStateSnapshot ){
    if( this.auth.auth0.authenticated ){
      console.log("Paso el guard"); 
      return true;
    }else{
      console.error("Bloqueado por el guard");
      return false;
    }
  }
}
