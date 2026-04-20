import {Component, inject, signal} from '@angular/core';
import {TranslocoDirective} from '@jsverse/transloco';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {RouterLink} from '@angular/router';
import {LangService} from '../../core/i18n/lang.service';
import {environment} from '../../../environments/environment';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

@Component({
  selector: 'app-contact-form',
  imports: [TranslocoDirective, ReactiveFormsModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.css',
})
export class ContactForm {
  private fb = inject(FormBuilder);
  private http = inject(HttpClient);
  langService = inject(LangService);

  status = signal<FormStatus>('idle');

  form = this.fb.group({
    name: ['', [
      Validators.required,
      Validators.minLength(2),
      Validators.pattern(/^[\p{L}\s'\-\.]+$/u),
    ]],
    email: ['', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/),
    ]],
    msg: ['', [Validators.required, Validators.minLength(10)]],
    privacy: [false, Validators.requiredTrue],
  });

  get name() { return this.form.get('name')!; }
  get email() { return this.form.get('email')!; }
  get msg() { return this.form.get('msg')!; }
  get privacy() { return this.form.get('privacy')!; }

  submit() {
    this.form.markAllAsTouched();
    if (this.form.invalid || this.status() === 'loading') return;

    this.status.set('loading');
    this.http.post(environment.contactApiUrl, this.form.value, { responseType: 'text' }).subscribe({
      next: () => {
        this.status.set('success');
        this.form.reset();
      },
      error: () => this.status.set('error'),
    });
  }

  retry() {
    this.status.set('idle');
  }
}
