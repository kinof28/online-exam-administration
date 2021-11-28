import { Admin } from './../modules/admin';
import { UpdateProfilRequest } from '../modules/update-profil-request';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from '../modules/account';
import { Notification } from '../modules/notification';
import { UpdateClientRequest } from '../modules/update-client-request';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private httpClient: HttpClient) {}

  public getCurrent(): Observable<Admin> {
    return this.httpClient.get<Admin>('/api/v1/admin/current');
  }
  public updateProfile(
    updatProfilRequest: UpdateProfilRequest
  ): Observable<string> {
    return this.httpClient.put<string>(
      `/api/v1/admin/profil/update/`,
      updatProfilRequest
    );
  }
  public getById(id: number): Observable<Account> {
    return this.httpClient.get<Account>(`/api/v0/client/${id}`);
  }
  public getClients(): Observable<Account[]> {
    return this.httpClient.get<Account[]>('/api/v0/admin/clients');
  }
  /**
   * deleteClient
   */
  public deleteClient(id: number): Observable<string> {
    return this.httpClient.delete<string>(`/api/v0/admin/deleteClient/${id}`);
  }
}
