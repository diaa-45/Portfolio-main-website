import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../../../core/services/course.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-details',
  imports: [CommonModule],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css'
})
export class CourseDetailsComponent {
  course: any;
  isLoading = false;  
  direction: 'rtl' | 'ltr' = 'rtl'; // default Arabic

  constructor(private route: ActivatedRoute, private courseService: CourseService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadProject(+id);
    }
  }

  loadProject(id: number) {
    this.isLoading = true;
    this.courseService.getById(id).subscribe({
      next: (res) => {
        this.course = res;
        this.direction = this.detectLanguageDirection(res.description);
        this.isLoading = false;
      },
      error: (err) => {
        console.error(err);
        this.isLoading = false;
      }
    });
  }
  // Detect if content is mostly English or Arabic
  detectLanguageDirection(text: string): 'rtl' | 'ltr' {
    const arabicRegex = /[\u0600-\u06FF]/; // Arabic Unicode range
    return arabicRegex.test(text) ? 'rtl' : 'ltr';
  }
}
