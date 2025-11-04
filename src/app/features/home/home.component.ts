import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProjectService } from '../../core/services/project.service';
import { ArticleService } from '../../core/services/article.service';
import { CourseService } from '../../core/services/course.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  projects: any[] = [];
  articles: any[] = [];
  courses: any[] = [];

  constructor(
    private projectService: ProjectService,
    private articleService: ArticleService,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    this.loadHomeData();
  }

  loadHomeData() {
    this.projectService.getAll().subscribe(res => this.projects = res.data.slice(0, 3));
    this.articleService.getAll().subscribe(res => this.articles = res.data.slice(0, 3));
    this.courseService.getAll().subscribe(res => this.courses = res.data.slice(0, 3));
  }
}
