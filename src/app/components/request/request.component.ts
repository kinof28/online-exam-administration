import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SellerRequest } from 'src/app/modules/seller-request';
import { SellerRequestService } from 'src/app/services/seller-request.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  private id:number=0;
  faceImgUrl:any;
  faceImg:any;
  idImg:any;
  nan:string="";
  request:SellerRequest=new SellerRequest();
  constructor(private sellerRequestService:SellerRequestService,private route:ActivatedRoute, private rout: Router) { }

  ngOnInit(): void {
    this.id=Number(this.route.snapshot.paramMap.get("id"));
    if(this.id>0)
    this.sellerRequestService.getRequest(this.id).subscribe(data=>{
      this.request=data;
    })
  }
  approve(){
    if (confirm("are u sure that u want to confirm this Client Identity ?\n this action can not be undone please be carefull")) {
      this.sellerRequestService.approveRequest(this.request.client.id).subscribe(data => {
        this.rout.navigateByUrl(`/dashboard/requests`);      });
    }
  }
  decline(){
    if (confirm("are u sure that u want to decline this Client request ?\n this action can not be undone please be carefull")) {
      this.sellerRequestService.rejectRequest(this.request.client.id).subscribe(data => {
        this.rout.navigateByUrl(`/dashboard/requests`);      });
    }
  }


}
