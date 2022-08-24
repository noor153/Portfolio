import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators ,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  constructor(private _service:AuthenticationService, private _Router:Router) { }
  error =null
  ngOnInit(): void {
  }

  registerForm:any = new FormGroup({
    first_name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(50)]),
    last_name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(50)]),
    age:new FormControl(null,[Validators.required,Validators.min(12),Validators.max(60)]),
    email:new FormControl(null,[Validators.required,Validators.email ]),
    password:new FormControl(null,[Validators.required,Validators.pattern('^[A-Z][a-z.0-9]{8,18}$')]),
  })

  onRegisterSubmit(registerForm:FormGroup){
    this._service.register(registerForm.value).subscribe((response)=>{
      if(response.message=="success"){
        this._Router.navigate(['/login'])
      }
      else{
        this.error=response.message
      }
    })
  }
}
