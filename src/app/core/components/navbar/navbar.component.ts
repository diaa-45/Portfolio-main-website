// navbar.component.ts
import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  menuOpen: boolean = false;
  isScrolled: boolean = false;

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
    
    // Prevent body scroll when menu is open
    if (this.menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }

  @HostListener('window:resize', [])
  onWindowResize(): void {
    // Close mobile menu on resize to desktop view
    if (window.innerWidth > 968 && this.menuOpen) {
      this.menuOpen = false;
      document.body.style.overflow = 'auto';
    }
  }
}