import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../modules/student';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private httpClient: HttpClient) {}

  public getAll(): Observable<Student[]> {
    return this.httpClient.get<Student[]>('/api/v1/admin/students');
  }
  public deleteOne(id: string): Observable<string> {
    return this.httpClient.delete<string>('/api/v1/admin/student/delete/' + id);
  }
}
