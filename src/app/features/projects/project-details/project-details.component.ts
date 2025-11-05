import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../../../core/services/project.service';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.css'
})
export class ProjectDetailsComponent implements OnInit {

  project: any;
  isLoading = false;  
  previewImage: string | null = null;


  constructor(private route: ActivatedRoute, private projectService: ProjectService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadProject(+id);
    }
  }

  loadProject(id: number) {
    this.isLoading = true;
    this.projectService.getById(id).subscribe({
      next: (res) => {
        this.project = res;
        this.isLoading = false;
      },
      error: (err) => {
        console.error(err);
        this.isLoading = false;
      }
    });
  }

openPreview(imageUrl: string) {
  this.previewImage = imageUrl;
}

closePreview() {
  this.previewImage = null;
}
hoverIn(event: any) {
  event.currentTarget.style.transform = 'scale(1.03)';
  event.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.3)';
}

hoverOut(event: any) {
  event.currentTarget.style.transform = 'scale(1)';
  event.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)';
}

zoomIn(event: any) {
  event.currentTarget.style.transform = 'scale(1.05)';
}

zoomOut(event: any) {
  event.currentTarget.style.transform = 'scale(1)';
}

onHover(event: any) {
  event.target.style.backgroundColor = '#0f5bb5';
}

onLeave(event: any) {
  event.target.style.backgroundColor = '#1976d2';
}
}
