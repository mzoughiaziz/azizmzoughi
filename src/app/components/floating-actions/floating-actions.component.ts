import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-floating-actions',
  standalone: true,
  imports: [],
  templateUrl: './floating-actions.component.html',
  styleUrl: './floating-actions.component.scss'
})
export class FloatingActionsComponent {
  showBackToTop = false;

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.showBackToTop = (typeof window !== 'undefined' ? window.scrollY : 0) > 500;
  }

  scrollToTop(): void {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
