import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private auth:AuthService) { }

  ngOnInit() {
  }

  login(){
    console.log("nav ser:",this.auth.auth0.authenticated);
    //this.auth.login();
    console.log("nav ser:",this.auth.auth0.authenticated);
  }

  logout(){
    this.auth.logout();
  }

}
