import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from 'src/app/modules/account';
import { UpdateClientRequest } from 'src/app/modules/update-client-request';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  message: string = "";
  successMessage!: string;
  errMessage!: string;
  public confirmationPassword:string="";
  public newPassword:string="";

  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit(): void {

  }
 
  updateHundle(): void {
    
  }
  clearHundle(): void {
  }
}
