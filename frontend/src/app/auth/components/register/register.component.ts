import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSnackBarModule,
    RouterModule
  ],
  template: `
    <div class="register-container">
      <mat-card>
        <mat-card-header>
          <mat-card-title>Kayıt Ol</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <form [formGroup]="registerForm" (ngSubmit)="onSubmit()">
            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Ad</mat-label>
              <input matInput formControlName="firstName" required>
              <mat-error *ngIf="registerForm.get('firstName')?.hasError('required')">
                Ad zorunludur
              </mat-error>
            </mat-form-field>

            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Soyad</mat-label>
              <input matInput formControlName="lastName" required>
              <mat-error *ngIf="registerForm.get('lastName')?.hasError('required')">
                Soyad zorunludur
              </mat-error>
            </mat-form-field>

            <mat-form-field appearance="outline" class="full-width">
              <mat-label>E-posta</mat-label>
              <input matInput formControlName="email" type="email" required>
              <mat-error *ngIf="registerForm.get('email')?.hasError('required')">
                E-posta zorunludur
              </mat-error>
              <mat-error *ngIf="registerForm.get('email')?.hasError('email')">
                Geçerli bir e-posta adresi giriniz
              </mat-error>
            </mat-form-field>

            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Şifre</mat-label>
              <input matInput formControlName="password" type="password" required>
              <mat-error *ngIf="registerForm.get('password')?.hasError('required')">
                Şifre zorunludur
              </mat-error>
              <mat-error *ngIf="registerForm.get('password')?.hasError('minlength')">
                Şifre en az 6 karakter olmalıdır
              </mat-error>
            </mat-form-field>

            <div class="form-actions">
              <button mat-raised-button color="primary" type="submit" 
                      [disabled]="!registerForm.valid || isLoading">
                {{ isLoading ? 'Kaydediliyor...' : 'Kayıt Ol' }}
              </button>
              <a mat-button routerLink="/auth/login">Zaten hesabınız var mı? Giriş yapın</a>
            </div>
          </form>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .register-container {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      padding: 20px;
      background-color: #f5f5f5;
    }
    mat-card {
      width: 100%;
      max-width: 400px;
    }
    .full-width {
      width: 100%;
      margin-bottom: 16px;
    }
    .form-actions {
      display: flex;
      flex-direction: column;
      gap: 16px;
      margin-top: 20px;
    }
  `]
})
export class RegisterComponent {
  registerForm: FormGroup;
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      this.isLoading = true;
      console.log('Form data:', this.registerForm.value);
      
      this.authService.register(this.registerForm.value).subscribe({
        next: (response) => {
          console.log('Register success:', response);
          this.snackBar.open('Kayıt başarılı! Giriş yapabilirsiniz.', 'Tamam', {
            duration: 3000
          });
          this.router.navigate(['/auth/login']);
        },
        error: (error) => {
          console.error('Register error:', error);
          this.isLoading = false;
          let errorMessage = 'Kayıt sırasında bir hata oluştu.';
          
          if (error.error?.message) {
            errorMessage = error.error.message;
          } else if (error.status === 400) {
            errorMessage = 'Geçersiz bilgiler. Lütfen bilgilerinizi kontrol edin.';
          } else if (error.status === 409) {
            errorMessage = 'Bu e-posta adresi zaten kullanımda.';
          }
          
          this.snackBar.open(errorMessage, 'Tamam', {
            duration: 5000,
            panelClass: ['error-snackbar']
          });
        },
        complete: () => {
          this.isLoading = false;
        }
      });
    }
  }
}
