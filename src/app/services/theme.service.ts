import { Injectable, signal } from '@angular/core';

const STORAGE_KEY = 'azizmzoughi-theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  readonly isDark = signal<boolean>(false);

  constructor() {
    const saved = typeof localStorage !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null;
    const prefersDark = typeof window !== 'undefined' && window.matchMedia
      ? window.matchMedia('(prefers-color-scheme: dark)').matches
      : false;

    const dark = saved ? saved === 'dark' : prefersDark;
    this.apply(dark);
  }

  toggle(): void {
    this.apply(!this.isDark());
  }

  private apply(dark: boolean): void {
    this.isDark.set(dark);
    if (typeof document !== 'undefined') {
      document.body.classList.toggle('dark-mode', dark);
    }
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, dark ? 'dark' : 'light');
    }
  }
}
