import { Component, ElementRef, HostListener, ViewChild, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NgIf } from '@angular/common';

const FORM_ENDPOINT = 'https://formsubmit.co/ajax/mzoughiaziz15@gmail.com';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  private readonly fb = inject(FormBuilder);
  private readonly http = inject(HttpClient);

  @ViewChild('modalPanel') modalPanel?: ElementRef<HTMLElement>;

  readonly sending = signal(false);
  readonly showModal = signal(false);
  readonly errorMessage = signal<string | null>(null);
  private lastFocused: HTMLElement | null = null;

  readonly form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(5)]]
  });

  submit(): void {
    if (this.form.invalid || this.sending()) {
      this.form.markAllAsTouched();
      return;
    }

    this.sending.set(true);
    this.errorMessage.set(null);

    const payload = {
      ...this.form.value,
      _captcha: 'false'
    };

    this.http.post(FORM_ENDPOINT, payload, {
      headers: { 'Accept': 'application/json' }
    }).subscribe({
      next: () => {
        this.sending.set(false);
        this.form.reset();
        this.openModal();
      },
      error: () => {
        this.sending.set(false);
        this.errorMessage.set('Something went wrong sending your message — please email mzoughiaziz@techie.com directly.');
      }
    });
  }

  openModal(): void {
    this.lastFocused = (typeof document !== 'undefined' ? document.activeElement as HTMLElement : null);
    this.showModal.set(true);
    setTimeout(() => this.modalPanel?.nativeElement.focus(), 0);
  }

  closeModal(): void {
    this.showModal.set(false);
    this.lastFocused?.focus();
  }

  onBackdropClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.closeModal();
    }
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.showModal()) {
      this.closeModal();
    }
  }

  get name() { return this.form.controls.name; }
  get email() { return this.form.controls.email; }
  get message() { return this.form.controls.message; }
}
