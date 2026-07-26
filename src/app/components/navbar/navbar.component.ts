import { Component, HostListener, inject } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  readonly theme = inject(ThemeService);
  menuOpen = false;
  scrolled = false;

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.scrolled = (typeof window !== 'undefined' ? window.scrollY : 0) > 40;
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }
}
