import { Component } from '@angular/core';
import { AboutService } from '../../core/services/about.service';
import { About } from './about.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  about: About| null =null;

  currentYear: number = new Date().getFullYear();

  constructor(private aboutService: AboutService) {}

  ngOnInit(): void {
    this.loadAboutData();
  }
  
  loadAboutData(): void {
    this.aboutService.getAll().subscribe({
      next: (res) => {
        this.about = res;
      },
      error: (err) => {
        console.error('Error loading about data:', err);
      }
    });
  }
}
