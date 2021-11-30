import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '../modules/message';

@Injectable({
  providedIn: 'root',
})
export class MessagingService {
  constructor(private httpClient: HttpClient) {}

  public getmessage(id: number): Observable<Message> {
    return this.httpClient.get<Message>(`/api/v1/admin/help-message/${id}`);
  }
  public getMessages(): Observable<Message[]> {
    return this.httpClient.get<Message[]>('/api/v1/admin/help-messages');
  }
  public deleteMessage(id: number): Observable<string> {
    return this.httpClient.delete<string>(
      `/api/v1/admin/help-message/delete/${id}`
    );
  }
  public response(id: number, context: string): Observable<string> {
    return this.httpClient.post<string>(
      `/api/v1/admin/help-message/reply/${id}`,
      context
    );
  }
}
