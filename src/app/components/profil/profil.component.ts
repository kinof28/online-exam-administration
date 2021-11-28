import { UpdateProfilRequest } from './../../modules/update-profil-request';
import { Admin } from './../../modules/admin';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from 'src/app/modules/account';
import { UpdateClientRequest } from 'src/app/modules/update-client-request';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css'],
})
export class ProfilComponent implements OnInit {
  message: string = '';
  successMessage!: string;
  errMessage!: string;
  admin: Admin = new Admin();
  updateAccountRequest: UpdateProfilRequest = new UpdateProfilRequest();
  passwordConfirmation: String = '';

  constructor(private accountService: AccountService, private router: Router) {}

  ngOnInit(): void {
    this.accountService.getCurrent().subscribe((data) => {
      // console.log(data);
      this.admin = data;
    });
  }

  clear(): void {
    this.updateAccountRequest = new UpdateProfilRequest();
  }
  update(): void {
    console.log(this.updateAccountRequest);
    this.accountService
      .updateProfile(this.updateAccountRequest)
      .subscribe(console.log);
  }
}
