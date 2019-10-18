import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  user :User={
    idUser:0,
    username: '', 
    password: '',
    fullname: ''
  };
  constructor(private auth:AuthService, private router: Router) { }

  ngOnInit() {
  }

  async login(){ 
    console.log(this.user);  

    await this.auth.login(this.user);  
    if(this.auth.auth0.authenticated){ 
    this.router.navigate(['/championship']);
    console.log('login exitoso'); 
    console.log(this.auth.auth0);  
    }else{
      console.log('error login'); 
      console.log(this.auth.auth0); 
    }
    console.log('fuera metodo login:',this.auth.auth0); 
  }

  

  logout(){
    this.auth.logout();
  }

}
