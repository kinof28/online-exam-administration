import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Teacher } from '../modules/teacher';

@Injectable({
  providedIn: 'root',
})
export class TeacherService {
  constructor(private httpClient: HttpClient) {}

  public getAll(): Observable<Teacher[]> {
    return this.httpClient.get<Teacher[]>('/api/v1/admin/teachers');
  }
  public deleteOne(id: number): Observable<string> {
    return this.httpClient.delete<string>('/api/v1/admin/teacher/delete/' + id);
  }
}
