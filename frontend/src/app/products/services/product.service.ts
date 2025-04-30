import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
  seller: {
    id: string;
    name: string;
  };
}

export interface ProductsResponse {
  products: Product[];
  total: number;
}

export interface ProductFilters {
  category?: string;
  search?: string;
  page: number;
  pageSize: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts(filters: ProductFilters): Observable<ProductsResponse> {
    const params = {
      ...(filters.category && { category: filters.category }),
      ...(filters.search && { search: filters.search }),
      page: filters.page.toString(),
      pageSize: filters.pageSize.toString()
    };

    return this.http.get<ProductsResponse>(`${environment.apiUrl}/products`, { params });
  }

  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(`${environment.apiUrl}/products/${id}`);
  }

  createProduct(product: Omit<Product, 'id'>): Observable<Product> {
    return this.http.post<Product>(`${environment.apiUrl}/products`, product);
  }

  updateProduct(id: string, product: Partial<Product>): Observable<Product> {
    return this.http.put<Product>(`${environment.apiUrl}/products/${id}`, product);
  }

  deleteProduct(id: string): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/products/${id}`);
  }
} 