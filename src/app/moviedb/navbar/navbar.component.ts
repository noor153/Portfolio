import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  constructor(private _service:AuthenticationService,private _Router:Router) { 
    this._service.logedin.subscribe(()=>{
      if(this._service.logedin.getValue() != null){
        this.login = this._service.logedin.getValue()
      }
      else{
        this.login = null
      }
    })

  }

  login:any

  ngOnInit(): void {
  }

  logout(){
    this._service.islogout()
  }
  
}
