import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { HttpClient } from '@angular/common/http';
//import auth0 from 'auth0-js';

/**servicio para la autenticacion */

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  API_URI = 'http://localhost:3000/api';
  auth0 ={
    authenticated:false,
    user:null
  }

  constructor(private http: HttpClient) { }



  public async login(user :User): Promise<void> {
    //this.auth0.authorize();
   await this.getUsername(user)
        .subscribe(
          res => {
            console.log('respuesta getusername',res);
            this.auth0.user = res;
            this.auth0.authenticated=true;
          },
          err => console.log(err)
        )
    
    
    console.log("servicio login auth:",this.auth0);
  }

  getUsername(user: User) {
    console.log('ruta que se va al servido: '+`${this.API_URI}/login/`,user);
    return this.http.post(`${this.API_URI}/login/`,user);
  }

  public logout(): void {
    //this.auth0.authorize();
    this.auth0.authenticated=false;
    console.log("servicio logout");
  }

  private setSession(user:User): void {
    // Set the time that the access token will expire at
    const expiresAt = JSON.stringify((10 * 1000) + new Date().getTime());
    localStorage.setItem('username', user.username);
    localStorage.setItem('id_user', user.idUser+"");
    localStorage.setItem('password', user.password);
    localStorage.setItem('expires_at', expiresAt);
  }
  
}
