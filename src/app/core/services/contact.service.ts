import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private baseUrl = 'https://localhost:44383/api/ContactForm';

  constructor(private http: HttpClient) {}

  sendMessage(contactData: { name: string; email: string; message: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}`, contactData);
  }
}
