import { UpdateProfilRequest } from '../../modules/update-profil-request';
import { Admin } from './../../modules/admin';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
import { AuthService } from 'src/app/services/auth.service';
import { MessagingService } from 'src/app/services/messaging.service';
import { Message } from 'src/app/modules/message';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css'],
})
export class AdminPanelComponent implements OnInit {
  admin: Admin = new Admin();
  private expanded: boolean = false;
  private active: number = 5;
  messages?: Array<Message>;
  constructor(
    private accountService: AccountService,
    private messageService: MessagingService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.accountService.getCurrent().subscribe((data) => {
      this.admin = data;
    });
    this.messageService.getMessages().subscribe((data) => {
      this.messages = data;
    });
  }
  messageClicked(id: number): void {
    this.router.navigateByUrl(`/dashboard/message/${id}`);
    this.expandMessages();
  }
  linkClicked(i: number): void {
    document.getElementById('' + this.active)?.classList.remove('active');
    document.getElementById('' + i)?.classList.add('active');
    this.active = i;
    this.expanded = true;
    this.expandMessages();
  }
  expandMessages(): void {
    let box = document.getElementById('box');
    if (!this.expanded) {
      box?.classList.remove('collabsed');
      box?.classList.add('expanded');
      this.expanded = true;
    } else {
      box?.classList.remove('expanded');
      box?.classList.add('collabsed');
      this.expanded = false;
    }
  }
  delete(id: number | any): void {
    if (
      confirm(
        'are u sure that u want to delete this message?\n this action can not be undone please be carefull'
      )
    )
      this.messageService.deleteMessage(id).subscribe((data) => {
        this.ngOnInit();
      });
  }
  logout(): void {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}
