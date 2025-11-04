import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../../../core/services/project.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-projects-list',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css'
})
export class ProjectListComponent implements OnInit {

  projects: any[] = [];
  isLoading = false;

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects() {
    this.isLoading = true;
    this.projectService.getAll().subscribe({
      next: (res) => {
        this.projects = res.data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error(err);
        this.isLoading = false;
      }
    });
  }
}
