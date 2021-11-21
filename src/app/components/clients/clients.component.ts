import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/modules/account';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients :Account[]=[];
  constructor(private accountService:AccountService) { }

  ngOnInit(): void {
    this.accountService.getClients().subscribe(data=>{
      this.clients=data;
    })
  }
  delete(id:number):void{
    if (confirm("are u sure that u want to delete this Client ?\n this action can not be undone please be carefull")){
      this.accountService.deleteClient(id).subscribe(data=>{
        console.log(data);
        this.ngOnInit();
      });
  }
  }

}
