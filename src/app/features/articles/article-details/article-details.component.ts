import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ArticleService } from '../../../core/services/article.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article-details',
  imports: [CommonModule,RouterModule],
  templateUrl: './article-details.component.html',
  styleUrl: './article-details.component.css'
})
export class ArticleDetailsComponent {

  article: any;
  isLoading = false;  
  direction: 'rtl' | 'ltr' = 'rtl'; // default Arabic

  constructor(private route: ActivatedRoute, private articleService: ArticleService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadProject(+id);
    }
  }

  loadProject(id: number) {
    this.isLoading = true;
    this.articleService.getById(id).subscribe({
      next: (res) => {
        this.article = res;
        this.direction = this.detectLanguageDirection(res.content);
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
