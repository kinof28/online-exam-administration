import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SellerRequest } from '../modules/seller-request';

@Injectable({
  providedIn: 'root'
})
export class SellerRequestService {

  constructor(private httpClient:HttpClient) { }

  /**
   * getAllRequests
   */
   public getAllRequests():Observable<SellerRequest[]> {
    return this.httpClient.get<SellerRequest[]>("/api/v0/admin/requests/");
  }
  public getRequest(id:number):Observable<SellerRequest> {
    return this.httpClient.get<SellerRequest>(`/api/v0/admin/request/${id}`);
  }
  public rejectRequest(id:number):Observable<string> {
    return this.httpClient.get<string>(`/api/v0/admin/decline/request/${id}`);
  }
  public approveRequest(id:number):Observable<string> {
    return this.httpClient.get<string>(`/api/v0/admin/approve/request/${id}`);
  }
  public getImg(id:number,img:string):Observable<any>{
    return this.httpClient.get(`/api/v0/admin/img/${id}/${img}`,{responseType: 'text'});
  }
  
}
