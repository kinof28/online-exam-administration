import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SellerRequest } from 'src/app/modules/seller-request';
import { SellerRequestService } from 'src/app/services/seller-request.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {
  requests: SellerRequest[] = [];
  constructor(private sellerRequestService: SellerRequestService, private route: Router) { }

  ngOnInit(): void {
    this.sellerRequestService.getAllRequests().subscribe(data => {
      this.requests = data;
    });
  }
  view(id: number): void {
    this.route.navigateByUrl(`/dashboard/request/${id}`);
  }
  delete(id: number): void {
    if (confirm("are u sure that u want to decline this Client request ?\n this action can not be undone please be carefull")) {
      this.sellerRequestService.rejectRequest(id).subscribe(data => {
        this.ngOnInit();
      });
    }
  }
}
