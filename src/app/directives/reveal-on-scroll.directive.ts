import { Directive, ElementRef, AfterViewInit, OnDestroy, inject } from '@angular/core';

@Directive({
  selector: '[appRevealOnScroll]',
  standalone: true
})
export class RevealOnScrollDirective implements AfterViewInit, OnDestroy {
  private readonly el = inject(ElementRef<HTMLElement>);
  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    const node = this.el.nativeElement;
    node.classList.add('reveal');

    const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false;

    if (prefersReducedMotion || typeof IntersectionObserver === 'undefined') {
      node.classList.add('is-visible');
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            node.classList.add('is-visible');
            this.observer?.unobserve(node);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    this.observer.observe(node);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
