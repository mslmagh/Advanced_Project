import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Product } from '../../products/services/product.service';

export interface OrderItem {
  id: string;
  product: Product;
  quantity: number;
  price: number;
}

export interface Order {
  id: string;
  items: OrderItem[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  createdAt: string;
  shippingAddress: {
    fullName: string;
    phone: string;
    address: string;
  };
}

export interface CreateOrderRequest {
  items: { productId: string; quantity: number }[];
  shippingAddress: {
    fullName: string;
    phone: string;
    address: string;
  };
  paymentDetails: {
    cardName: string;
    cardNumber: string;
    expiryDate: string;
    cvv: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(private http: HttpClient) {}

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${environment.apiUrl}/orders`);
  }

  getOrder(id: string): Observable<Order> {
    return this.http.get<Order>(`${environment.apiUrl}/orders/${id}`);
  }

  createOrder(request: CreateOrderRequest): Observable<Order> {
    return this.http.post<Order>(`${environment.apiUrl}/orders`, request);
  }

  updateOrderStatus(id: string, status: Order['status']): Observable<Order> {
    return this.http.patch<Order>(`${environment.apiUrl}/orders/${id}`, { status });
  }

  cancelOrder(id: string): Observable<Order> {
    return this.updateOrderStatus(id, 'cancelled');
  }
} 