import { Component } from '@angular/core';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      price: 99.99,
      description: 'This is a sample product description.',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 2,
      name: 'Product 2',
      price: 149.99,
      description: 'This is another sample product description.',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 3,
      name: 'Product 3',
      price: 199.99,
      description: 'This is yet another sample product description.',
      image: 'https://via.placeholder.com/150'
    }
  ];

  addToCart(product: Product) {
    console.log('Added to cart:', product);
    // Add your cart logic here
  }
}