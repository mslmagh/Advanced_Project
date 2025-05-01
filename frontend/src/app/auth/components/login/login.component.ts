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
  selector: 'app-login',
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
    <div class="login-container">
      <mat-card>
        <mat-card-header>
          <mat-card-title>Giriş Yap</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
            <mat-form-field appearance="outline" class="full-width">
              <mat-label>E-posta</mat-label>
              <input matInput formControlName="email" type="email" required>
              <mat-error *ngIf="loginForm.get('email')?.hasError('required')">
                E-posta zorunludur
              </mat-error>
              <mat-error *ngIf="loginForm.get('email')?.hasError('email')">
                Geçerli bir e-posta adresi giriniz
              </mat-error>
            </mat-form-field>

            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Şifre</mat-label>
              <input matInput formControlName="password" type="password" required>
              <mat-error *ngIf="loginForm.get('password')?.hasError('required')">
                Şifre zorunludur
              </mat-error>
            </mat-form-field>

            <div class="form-actions">
              <button mat-raised-button color="primary" type="submit" 
                      [disabled]="!loginForm.valid || isLoading">
                {{ isLoading ? 'Giriş yapılıyor...' : 'Giriş Yap' }}
              </button>
              <a mat-button routerLink="/auth/register">Hesabınız yok mu? Kayıt olun</a>
            </div>
          </form>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .login-container {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      padding: 20px;
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
export class LoginComponent {
  loginForm: FormGroup;
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.isLoading = true;
      console.log('Login attempt with:', this.loginForm.value);
      
      this.authService.login(this.loginForm.value).subscribe({
        next: (response) => {
          console.log('Login response:', response);
          this.snackBar.open('Giriş başarılı!', 'Tamam', {
            duration: 3000
          });
          this.router.navigate(['/']);
        },
        error: (error) => {
          console.error('Login error:', error);
          this.isLoading = false;
          
          let errorMessage = 'Giriş yapılırken bir hata oluştu.';
          if (error.error?.message) {
            errorMessage = error.error.message;
          } else if (error.status === 401) {
            errorMessage = 'E-posta veya şifre hatalı.';
          } else if (error.status === 400) {
            errorMessage = 'Geçersiz giriş bilgileri.';
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