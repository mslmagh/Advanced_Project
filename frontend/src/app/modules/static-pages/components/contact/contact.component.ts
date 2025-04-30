import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ],
  template: `
    <div class="container">
      <div class="contact-grid">
        <mat-card class="contact-form-card">
          <mat-card-header>
            <mat-card-title>Bize Ulaşın</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="contact-form">
              <mat-form-field appearance="outline">
                <mat-label>Ad Soyad</mat-label>
                <input matInput formControlName="name" required>
                <mat-error *ngIf="contactForm.get('name')?.hasError('required')">
                  Ad Soyad zorunludur
                </mat-error>
              </mat-form-field>

              <mat-form-field appearance="outline">
                <mat-label>E-posta</mat-label>
                <input matInput formControlName="email" required type="email">
                <mat-error *ngIf="contactForm.get('email')?.hasError('required')">
                  E-posta zorunludur
                </mat-error>
                <mat-error *ngIf="contactForm.get('email')?.hasError('email')">
                  Geçerli bir e-posta adresi giriniz
                </mat-error>
              </mat-form-field>

              <mat-form-field appearance="outline">
                <mat-label>Konu</mat-label>
                <mat-select formControlName="subject" required>
                  <mat-option value="siparis">Sipariş Hakkında</mat-option>
                  <mat-option value="iade">İade/Değişim</mat-option>
                  <mat-option value="teknik">Teknik Destek</mat-option>
                  <mat-option value="oneri">Öneri/Şikayet</mat-option>
                  <mat-option value="diger">Diğer</mat-option>
                </mat-select>
                <mat-error *ngIf="contactForm.get('subject')?.hasError('required')">
                  Konu seçimi zorunludur
                </mat-error>
              </mat-form-field>

              <mat-form-field appearance="outline">
                <mat-label>Mesajınız</mat-label>
                <textarea 
                  matInput 
                  formControlName="message" 
                  required
                  rows="6"
                ></textarea>
                <mat-error *ngIf="contactForm.get('message')?.hasError('required')">
                  Mesaj zorunludur
                </mat-error>
              </mat-form-field>

              <button 
                mat-raised-button 
                color="primary" 
                type="submit"
                [disabled]="contactForm.invalid"
              >
                Gönder
              </button>
            </form>
          </mat-card-content>
        </mat-card>

        <mat-card class="contact-info-card">
          <mat-card-header>
            <mat-card-title>İletişim Bilgileri</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <div class="info-section">
              <h3>Müşteri Hizmetleri</h3>
              <p>
                <mat-icon>phone</mat-icon>
                <span>0850 XXX XX XX</span>
              </p>
              <p class="working-hours">
                Hafta içi: 09:00 - 18:00<br>
                Cumartesi: 09:00 - 13:00
              </p>
            </div>

            <div class="info-section">
              <h3>E-posta</h3>
              <p>
                <mat-icon>email</mat-icon>
                <span>destek&#64;aldimgitti.com</span>
              </p>
            </div>

            <div class="info-section">
              <h3>Adres</h3>
              <p>
                <mat-icon>location_on</mat-icon>
                <span>
                  Maslak Mah. Büyükdere Cad.<br>
                  No:123 Sarıyer/İstanbul
                </span>
              </p>
            </div>

            <div class="info-section">
              <h3>Sosyal Medya</h3>
              <div class="social-links">
                <a href="#" class="social-link facebook">
                  <svg viewBox="0 0 320 512" height="16" width="16">
                    <path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
                  </svg>
                </a>
                <a href="#" class="social-link twitter">
                  <svg viewBox="0 0 512 512" height="16" width="16">
                    <path fill="currentColor" d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
                  </svg>
                </a>
                <a href="#" class="social-link instagram">
                  <svg viewBox="0 0 448 512" height="16" width="16">
                    <path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                  </svg>
                </a>
                <a href="#" class="social-link youtube">
                  <svg viewBox="0 0 576 512" height="16" width="16">
                    <path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/>
                  </svg>
                </a>
              </div>
            </div>
          </mat-card-content>
        </mat-card>
      </div>
    </div>
  `,
  styles: [`
    .container {
      max-width: 1200px;
      margin: 32px auto;
      padding: 0 16px;
    }

    .contact-grid {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 24px;
    }

    mat-card {
      margin-bottom: 24px;
    }

    mat-card-title {
      color: #333;
      font-size: 24px;
      margin-bottom: 24px;
    }

    .contact-form {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .info-section {
      margin-bottom: 32px;
    }

    .info-section h3 {
      color: #333;
      font-size: 18px;
      margin-bottom: 16px;
    }

    .info-section p {
      display: flex;
      align-items: center;
      gap: 8px;
      color: #666;
      margin-bottom: 8px;
    }

    .working-hours {
      margin-left: 32px;
      font-size: 14px;
    }

    .social-links {
      display: flex;
      gap: 16px;
      margin-top: 16px;
    }

    .social-link {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      text-decoration: none;
      transition: all 0.3s ease;
      color: white;
    }

    .social-link svg {
      width: 20px;
      height: 20px;
    }

    .social-link.facebook {
      background-color: #3b5998;
    }

    .social-link.twitter {
      background-color: #1da1f2;
    }

    .social-link.instagram {
      background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
    }

    .social-link.youtube {
      background-color: #ff0000;
    }

    .social-link:hover {
      transform: translateY(-2px);
      opacity: 0.9;
    }

    button[color="primary"] {
      background-color: #ff6000;
    }

    @media (max-width: 768px) {
      .contact-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form data:', this.contactForm.value);
      alert('Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.');
      this.contactForm.reset();
    }
  }
} 