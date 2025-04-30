import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Product } from '../../products/services/product.service';

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  total: number;
}

export interface AddToCartRequest {
  productId: string;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartSubject = new BehaviorSubject<Cart>({ items: [], total: 0 });
  cart$ = this.cartSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadCart();
  }

  private loadCart(): void {
    this.http.get<Cart>(`${environment.apiUrl}/cart`)
      .subscribe(cart => {
        this.cartSubject.next(cart);
      });
  }

  getCart(): Observable<Cart> {
    return this.cart$;
  }

  getCartItemCount(): Observable<number> {
    return this.cart$.pipe(
      map(cart => cart.items.reduce((total, item) => total + item.quantity, 0))
    );
  }

  addToCart(request: AddToCartRequest): Observable<Cart> {
    return this.http.post<Cart>(`${environment.apiUrl}/cart/items`, request)
      .pipe(
        tap(cart => {
          this.cartSubject.next(cart);
        })
      );
  }

  updateCartItem(itemId: string, quantity: number): Observable<Cart> {
    return this.http.put<Cart>(`${environment.apiUrl}/cart/items/${itemId}`, { quantity })
      .pipe(
        tap(cart => {
          this.cartSubject.next(cart);
        })
      );
  }

  removeCartItem(itemId: string): Observable<Cart> {
    return this.http.delete<Cart>(`${environment.apiUrl}/cart/items/${itemId}`)
      .pipe(
        tap(cart => {
          this.cartSubject.next(cart);
        })
      );
  }

  clearCart(): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/cart`)
      .pipe(
        tap(() => {
          this.cartSubject.next({ items: [], total: 0 });
        })
      );
  }
} 