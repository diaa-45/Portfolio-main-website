import { Component, OnInit } from '@angular/core';
import { Course } from '../course.model';
import { CourseService } from '../../../core/services/course.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-courses-list',
  imports: [CommonModule,RouterModule],
  templateUrl: './courses-list.component.html',
  styleUrl: './courses-list.component.css'
})
export class CoursesListComponent implements OnInit {
  courses: Course[] = [];
  loading = false;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses(): void {
    this.loading = true;
    this.courseService.getAll().subscribe({
      next: (res) => {
        this.courses = res.data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
}
