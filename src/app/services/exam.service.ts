import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Exam } from '../modules/exam';

@Injectable({
  providedIn: 'root',
})
export class ExamService {
  constructor(private httpClient: HttpClient) {}

  public getAll(): Observable<Exam[]> {
    return this.httpClient.get<Exam[]>('/api/v1/admin/exams');
  }
  public deleteOne(id: number): Observable<string> {
    return this.httpClient.delete<string>('/api/v1/admin/exam/delete/' + id);
  }
}
