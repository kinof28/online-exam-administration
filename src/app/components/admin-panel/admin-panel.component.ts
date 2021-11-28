import { UpdateProfilRequest } from '../../modules/update-profil-request';
import { Admin } from './../../modules/admin';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css'],
})
export class AdminPanelComponent implements OnInit {
  admin: Admin = new Admin();
  constructor(
    private accountService: AccountService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.accountService.getCurrent().subscribe((data) => {
      this.admin = data;
    });
  }
  logout(): void {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}
