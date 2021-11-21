import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '../modules/message';
import { RegisterRequest } from '../modules/register-request';

@Injectable({
  providedIn: 'root'
})
export class SubscribeServiceService {

  constructor(private httpClient : HttpClient) { }

  
}
