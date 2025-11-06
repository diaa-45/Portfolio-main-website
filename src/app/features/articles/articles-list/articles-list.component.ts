import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../../../core/services/project.service';
import { Router, RouterModule } from '@angular/router';
import { ArticleService } from '../../../core/services/article.service';

@Component({
  selector: 'app-projects-list',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './articles-list.component.html',
  styleUrl: './articles-list.component.css'
})
export class ArticlesListComponent implements OnInit {

  articles: any[] = [];
  isLoading = false;

  constructor(private articleService: ArticleService,private router: Router) {}

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects() {
    this.isLoading = true;
    this.articleService.getAll().subscribe({
      next: (res) => {
        this.articles = res.data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error(err);
        this.isLoading = false;
      }
    });
  }
  openDetails(id: number) {
    this.router.navigate(['/articles', id]);
  }
}
