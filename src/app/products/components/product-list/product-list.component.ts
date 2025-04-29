import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ProductService } from '../../services/product.service';

interface Product {
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

@Component({
  selector: 'app-product-list',
  template: `
    <div class="product-filters">
      <mat-form-field appearance="outline">
        <mat-label>Kategori</mat-label>
        <mat-select [(ngModel)]="selectedCategory" (selectionChange)="onCategoryChange()">
          <mat-option value="">Tümü</mat-option>
          <mat-option value="Elektronik">Elektronik</mat-option>
          <mat-option value="Giyim">Giyim</mat-option>
          <mat-option value="Kitap">Kitap</mat-option>
        </mat-select>
      </mat-form-field>

      <mat-form-field appearance="outline">
        <mat-label>Ara</mat-label>
        <input matInput [(ngModel)]="searchQuery" (keyup)="onSearch()">
        <mat-icon matSuffix>search</mat-icon>
      </mat-form-field>
    </div>

    <div class="product-grid">
      <mat-grid-list cols="4" rowHeight="400px" gutterSize="16px">
        <mat-grid-tile *ngFor="let product of products">
          <mat-card class="product-card" [routerLink]="['/products', product.id]">
            <img mat-card-image [src]="product.imageUrl" [alt]="product.name">
            <mat-card-content>
              <h3>{{ product.name }}</h3>
              <p class="price">{{ product.price | currency:'TRY':'symbol-narrow':'1.2-2' }}</p>
              <p class="category">{{ product.category }}</p>
            </mat-card-content>
          </mat-card>
        </mat-grid-tile>
      </mat-grid-list>
    </div>

    <mat-paginator
      [length]="totalProducts"
      [pageSize]="pageSize"
      [pageSizeOptions]="[12, 24, 36]"
      (page)="onPageChange($event)"
      aria-label="Sayfa seçin">
    </mat-paginator>
  `,
  styles: [`
    .product-filters {
      display: flex;
      gap: 16px;
      margin-bottom: 24px;
    }
    .product-grid {
      margin-bottom: 24px;
    }
    .product-card {
      width: 100%;
      height: 100%;
      cursor: pointer;
      transition: transform 0.2s;
    }
    .product-card:hover {
      transform: translateY(-4px);
    }
    .product-card img {
      height: 200px;
      object-fit: cover;
    }
    .price {
      font-size: 1.2em;
      font-weight: bold;
      color: #1976d2;
    }
    .category {
      color: #666;
    }
    mat-form-field {
      width: 200px;
    }
  `]
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  selectedCategory: string = '';
  searchQuery: string = '';
  pageSize: number = 12;
  currentPage: number = 0;
  totalProducts: number = 0;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts({
      category: this.selectedCategory,
      search: this.searchQuery,
      page: this.currentPage,
      pageSize: this.pageSize
    }).subscribe(response => {
      this.products = response.products;
      this.totalProducts = response.total;
    });
  }

  onCategoryChange(): void {
    this.currentPage = 0;
    this.loadProducts();
  }

  onSearch(): void {
    this.currentPage = 0;
    this.loadProducts();
  }

  onPageChange(event: PageEvent): void {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadProducts();
  }
} 