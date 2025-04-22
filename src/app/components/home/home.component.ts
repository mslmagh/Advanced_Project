import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  discount?: number;
  rating: number;
  ratingCount: number;
  brand: string;
  model: string;
  hasKargoLabel?: boolean;
  hasCokAlLabel?: boolean;
  hasKuponLabel?: boolean;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, ProductCardComponent],
  template: `
    <div class="home-container">
      <!-- Product Section Tabs -->
      <div class="section-tabs">
        <button class="tab active">Sepete en çok eklenenler</button>
        <button class="tab">En çok öne çıkanlar</button>
        <button class="tab">Flaş Ürünler</button>
      </div>

      <!-- Category Title with See All -->
      <div class="category-header">
        <h2>Müslüm, Sana Özel Ürünler</h2>
        <a href="#" class="see-all">Tümünü Gör <i class="arrow-right"></i></a>
      </div>

      <!-- Products Grid -->
      <div class="products-grid">
        @for (product of products; track product.id) {
          <app-product-card [product]="product"></app-product-card>
        }
      </div>

      <!-- Flash Sale Section -->
      <div class="flash-sale">
        <div class="flash-header">
          <div class="flash-title">
            <i class="flash-icon"></i>
            <span>Flaş Ürünler</span>
          </div>
          <div class="flash-timer">
            <span class="timer-box">{{ timer.hours }}</span>
            <span class="timer-box">{{ timer.minutes }}</span>
            <span class="timer-box">{{ timer.seconds }}</span>
          </div>
          <a href="#" class="see-all">Tüm Ürünler <i class="arrow-right"></i></a>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  timer = {
    hours: '00',
    minutes: '02',
    seconds: '46'
  };

  products: Product[] = [
    {
      id: 1,
      name: 'MOTOYOL Scooter 6y6 125 150 Uyumlu Tornalı Modifiye Ön Maşa Rulmanı',
      brand: 'MOTOYOL',
      model: 'Scooter',
      price: 646.66,
      image: 'assets/products/product1.jpg',
      rating: 3.5,
      ratingCount: 11,
      hasCokAlLabel: true
    },
    {
      id: 2,
      name: 'SpeedUp Speed Up Scooter 6y6 125CC Motosiklet Arka Varyatör',
      brand: 'SpeedUp',
      model: 'Speed Up Scooter',
      price: 779,
      originalPrice: 879,
      image: 'assets/products/product2.jpg',
      rating: 3.3,
      ratingCount: 7,
      discount: 15,
      hasKuponLabel: true
    },
    {
      id: 3,
      name: 'venucci home & living Quincey Buklelı Yumuşak Peluş Post Halı',
      brand: 'venucci',
      model: 'home & living',
      price: 524.99,
      image: 'assets/products/product3.jpg',
      rating: 4.8,
      ratingCount: 954
    },
    {
      id: 4,
      name: 'Bando Arora Beatrix (PERFORMANS SET) Japon Kahvesi Demleme Seti',
      brand: 'Bando',
      model: 'Arora Beatrix',
      price: 3403.50,
      image: 'assets/products/product4.jpg',
      rating: 4.6,
      ratingCount: 18,
      hasCokAlLabel: true
    },
    {
      id: 5,
      name: "L'eDoren Project X 4.3inc IPS Hd Ekran 10000+ Oyunlu Retro Oyun Konsolu",
      brand: "L'eDoren",
      model: 'Project X',
      price: 2786.02,
      originalPrice: 2923.72,
      image: 'assets/products/product5.jpg',
      rating: 4.5,
      ratingCount: 15,
      discount: 30,
      hasCokAlLabel: true
    }
  ];
}