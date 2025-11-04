import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article, ArticlePaginationResult } from '../../features/articles/article.model';

@Injectable({ providedIn: 'root' })
export class ArticleService {
  private baseUrl = 'https://localhost:44383/api/Articles';

  constructor(private http: HttpClient) {}

  getAll(): Observable<ArticlePaginationResult> {
    return this.http.get<ArticlePaginationResult>(this.baseUrl);
  }

  getById(id: number): Observable<Article> {
    return this.http.get<Article>(`${this.baseUrl}/${id}`);
  }
}
