import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course, CoursePaginationResult } from '../../features/courses/course.model';

@Injectable({ providedIn: 'root' })
export class CourseService {
  private baseUrl = 'https://localhost:44383/api/Course';

  constructor(private http: HttpClient) {}

  getAll(): Observable<CoursePaginationResult> {
    return this.http.get<CoursePaginationResult>(this.baseUrl);
  }

  getById(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.baseUrl}/${id}`);
  }
}
