import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Message } from 'src/app/modules/message';
import { MessagingService } from 'src/app/services/messaging.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  message : Message=new Message();
  private id:number=0;
  replyContext:string="";
  wait:boolean=false;
  constructor(private service:MessagingService,private route:ActivatedRoute, private rout: Router) { }

  ngOnInit(): void {
    this.id=Number(this.route.snapshot.paramMap.get("id"));
    this.service.getmessage(this.id).subscribe(data=>{
      this.message=data;
    })
  }
  delete(): void {
    if (confirm("are u sure that u want to delete this message?\n this action can not be undone please be carefull"))
      this.service.deleteMessage(this.id).subscribe(data => {
        this.rout.navigateByUrl(`/dashboard/messages`);
      });
  }
  reply():void{
    this.wait=true;
    this.service.response(this.id,this.replyContext).subscribe(data=>{
      this.rout.navigateByUrl(`/dashboard/messages`);
    });
  }
}
