import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Branch } from '../modules/branch';
import { CreateBranchRequest } from '../modules/create-branch-request';

@Injectable({
  providedIn: 'root',
})
export class UniversisityService {
  constructor(private httpClient: HttpClient) {}
  public getAllBranches(): Observable<Branch[]> {
    return this.httpClient.get<Branch[]>('/api/v1/admin/branches');
  }
  public getAllSpecialities(id: number): Observable<Branch[]> {
    return this.httpClient.get<Branch[]>('/api/v1/admin/specialities/' + id);
  }
  public getSpeciality(id: number): Observable<Branch> {
    return this.httpClient.get<Branch>('/api/v1/admin/speciality/' + id);
  }
  public createSpeciality(speciality: Branch): Observable<string> {
    return this.httpClient.post<string>(
      '/api/v1/admin/create/speciality',
      speciality
    );
  }
  public createBranch(
    request: CreateBranchRequest,
    branchType: string
  ): Observable<string> {
    return this.httpClient.post<string>(
      `/api/v1/admin/create/${branchType.toLowerCase()}`,
      request
    );
  }
}
