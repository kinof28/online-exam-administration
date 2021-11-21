import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRequest } from 'src/app/modules/login-request';
import { AuthService } from 'src/app/services/auth.service';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage:string="";
  loginRequest:LoginRequest=new LoginRequest();
  constructor(private LoginServiceService:LoginServiceService,private authService:AuthService,private router :Router) { }

  ngOnInit(): void {
  }
  login():void{
    this.LoginServiceService.login(this.loginRequest).subscribe(data=>{
      if(data.startsWith("Bearer")){
        this.authService.login("ad"+data);
        this.router.navigateByUrl("/dashboard");
      }else{
        this.errorMessage="please check your email and password and try again";
      }
    })
  }

}
