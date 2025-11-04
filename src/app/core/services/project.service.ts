import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project, ProjectPaginationResult } from '../../features/projects/project.model';

@Injectable({ providedIn: 'root' })
export class ProjectService {
  private baseUrl = 'https://localhost:44383/api/Projects';

  constructor(private http: HttpClient) {}

  getAll(): Observable<ProjectPaginationResult> {
    return this.http.get<ProjectPaginationResult>(this.baseUrl);
  }

  getById(id: number): Observable<Project> {
    return this.http.get<Project>(`${this.baseUrl}/${id}`);
  }
}
