import { Component, OnInit } from '@angular/core';
import { Notification } from 'src/app/modules/notification';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  notifications:Notification[]=Array();
  joinReq:string="JOINREQUEST";
  joinDeq:string="JOINREQUESTDECLINE";
  joinApp:string="JOINREQUESTAPPROAVAL";
  sel_demande_approval:string="DEMANDEAPPROAVAL";
  sel_demande_reject:string="DEMANDEDECLINE";
  omited:string="OMITED"

  constructor(private accountService:AccountService) { }

  ngOnInit(): void {
    // this.accountService.getNotifications().subscribe(data=>{
    //   this.notifications=data;
    // })
  }
  approave(articleId:number,clientId:number,notificationId:number):void{
    // this.accountService.approave(articleId,clientId).subscribe(data=>this.ignore(notificationId));
  }
  decline(articleId:number,clientId:number,notificationId:number):void{
    // this.accountService.decline(articleId,clientId).subscribe(data=>this.ignore(notificationId));
  }
  ignore(notificationId:number):void{
    // this.accountService.ignore(notificationId).subscribe(data=>this.ngOnInit());
  }
  

}
