import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

export const apiInterceptor: HttpInterceptorFn = (req, next) => {
  const snackBar = inject(MatSnackBar);

  // API isteğini değiştir
  const modifiedReq = req.clone({
    setHeaders: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  });

  console.log('Making request to:', modifiedReq.url, {
    method: modifiedReq.method,
    headers: modifiedReq.headers.keys().reduce((acc, key) => ({
      ...acc,
      [key]: modifiedReq.headers.get(key)
    }), {}),
    body: modifiedReq.body
  });

  return next(modifiedReq).pipe(
    catchError((error: HttpErrorResponse) => {
      console.error('API Error:', {
        status: error.status,
        statusText: error.statusText,
        error: error.error,
        url: error.url,
        headers: error.headers,
        message: error.message
      });

      let errorMessage = 'Bir hata oluştu.';

      if (error.status === 0) {
        errorMessage = 'Sunucuya bağlanılamıyor. Lütfen internet bağlantınızı kontrol edin.';
      } else if (error.status === 400) {
        errorMessage = error.error?.message || 'Geçersiz istek.';
      } else if (error.status === 401) {
        errorMessage = 'Oturum süreniz doldu veya giriş yapılmadı.';
      } else if (error.status === 403) {
        errorMessage = 'Bu işlem için yetkiniz yok.';
      } else if (error.status === 404) {
        errorMessage = 'İstek yapılan kaynak bulunamadı.';
      } else if (error.status === 409) {
        errorMessage = error.error?.message || 'Bu kayıt zaten mevcut.';
      } else if (error.status === 500) {
        errorMessage = 'Sunucu hatası oluştu. Lütfen daha sonra tekrar deneyin.';
      }

      if (error.error?.message) {
        errorMessage = error.error.message;
      }

      snackBar.open(errorMessage, 'Tamam', {
        duration: 5000,
        panelClass: ['error-snackbar']
      });

      return throwError(() => error);
    })
  );
}; 