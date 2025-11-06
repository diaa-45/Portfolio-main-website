import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { About } from '../../features/about/about.model';

@Injectable({ providedIn: 'root' })
export class AboutService {
  private baseUrl = 'https://localhost:44383/api/About';

  constructor(private http: HttpClient) {}

  getAll(): Observable<About> {
    return this.http.get<About>(this.baseUrl);
  }
}
