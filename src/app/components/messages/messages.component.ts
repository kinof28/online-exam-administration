import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from 'src/app/modules/message';
import { MessagingService } from 'src/app/services/messaging.service';
import { SubscribeServiceService } from 'src/app/services/subscribe-service.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  messages: Message[] = [];
  constructor(private service: MessagingService, private route: Router) { }

  ngOnInit(): void {
    this.service.getMessages().subscribe(data => {
      this.messages = data;
    });
  }
  view(id: number): void {
    this.route.navigateByUrl(`/dashboard/message/${id}`);
  }
  delete(id: number): void {
    if (confirm("are u sure that u want to delete this message?\n this action can not be undone please be carefull"))
      this.service.deleteMessage(id).subscribe(data => {
        this.ngOnInit();
      });
  }
}
