import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  template: `
    <div class="register-container">
      <mat-card>
        <mat-card-header>
          <mat-card-title>Kayıt Ol</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <form [formGroup]="registerForm" (ngSubmit)="onSubmit()">
            <mat-form-field appearance="outline">
              <mat-label>Ad Soyad</mat-label>
              <input matInput formControlName="fullName" required>
              <mat-error *ngIf="registerForm.get('fullName')?.hasError('required')">
                Ad Soyad zorunludur
              </mat-error>
            </mat-form-field>

            <mat-form-field appearance="outline">
              <mat-label>E-posta</mat-label>
              <input matInput type="email" formControlName="email" required>
              <mat-error *ngIf="registerForm.get('email')?.hasError('required')">
                E-posta zorunludur
              </mat-error>
              <mat-error *ngIf="registerForm.get('email')?.hasError('email')">
                Geçerli bir e-posta adresi giriniz
              </mat-error>
            </mat-form-field>

            <mat-form-field appearance="outline">
              <mat-label>Şifre</mat-label>
              <input matInput type="password" formControlName="password" required>
              <mat-error *ngIf="registerForm.get('password')?.hasError('required')">
                Şifre zorunludur
              </mat-error>
              <mat-error *ngIf="registerForm.get('password')?.hasError('minlength')">
                Şifre en az 6 karakter olmalıdır
              </mat-error>
            </mat-form-field>

            <mat-form-field appearance="outline">
              <mat-label>Kullanıcı Tipi</mat-label>
              <mat-select formControlName="role" required>
                <mat-option value="customer">Müşteri</mat-option>
                <mat-option value="seller">Satıcı</mat-option>
              </mat-select>
              <mat-error *ngIf="registerForm.get('role')?.hasError('required')">
                Kullanıcı tipi seçiniz
              </mat-error>
            </mat-form-field>

            <button mat-raised-button color="primary" type="submit" [disabled]="registerForm.invalid">
              Kayıt Ol
            </button>
          </form>
        </mat-card-content>
        <mat-card-actions>
          <a mat-button routerLink="/auth/login">Zaten hesabınız var mı? Giriş yapın</a>
        </mat-card-actions>
      </mat-card>
    </div>
  `,
  styles: [`
    .register-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color: #f5f5f5;
    }
    mat-card {
      max-width: 400px;
      width: 90%;
      padding: 20px;
    }
    form {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    mat-form-field {
      width: 100%;
    }
    button[type="submit"] {
      margin-top: 16px;
    }
  `]
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.registerForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['customer', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.registerForm.valid) {
      // TODO: Implement registration logic with AuthService
      console.log(this.registerForm.value);
      this.snackBar.open('Kayıt başarılı!', 'Kapat', {
        duration: 3000
      });
      this.router.navigate(['/auth/login']);
    }
  }
} 