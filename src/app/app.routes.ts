import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { AboutComponent } from './features/about/about.component';
import { ArticlesListComponent } from './features/articles/articles-list/articles-list.component';
import { ArticleDetailsComponent } from './features/articles/article-details/article-details.component';
import { ProjectListComponent } from './features/projects/project-list/project-list.component';
import { ProjectDetailsComponent } from './features/projects/project-details/project-details.component';
import { CoursesListComponent } from './features/courses/courses-list/courses-list.component';
import { CourseDetailsComponent } from './features/courses/course-details/course-details.component';
import { ContactComponent } from './features/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'articles', component: ArticlesListComponent },
  { path: 'articles/:id', component: ArticleDetailsComponent },
  { path: 'projects', component: ProjectListComponent },
  { path: 'projects/:id', component: ProjectDetailsComponent },
  { path: 'courses', component: CoursesListComponent },
  { path: 'courses/:id', component: CourseDetailsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' },
];
