import { Component, OnInit } from '@angular/core';
import { FormControl,Validators,FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _service:AuthenticationService,private _Router:Router) { }

  errorServer = null
  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    email:new FormControl(null,[Validators.required,Validators.email]),
    password: new FormControl(null,[Validators.required,Validators.pattern('^[A-Z][a-z.0-9]{8,18}$')])
  })

  onLoginSubmit(loginForm:FormGroup)
  {
     this._service.login(loginForm.value).subscribe((res)=>{
      if (res.message == "success") {
        localStorage.setItem('token',res.token)
        this._service.saveNewUser()
        this._Router.navigate(['moviedb/home'])
      } else {
        this.errorServer=res.message
      }
     })
  }

}
