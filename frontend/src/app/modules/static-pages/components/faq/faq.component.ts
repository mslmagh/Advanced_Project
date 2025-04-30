import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';

interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, MatExpansionModule, MatCardModule],
  template: `
    <div class="container">
      <mat-card class="intro-card">
        <mat-card-header>
          <mat-card-title>Sıkça Sorulan Sorular</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <p>
            Merak ettiğiniz soruların cevaplarını burada bulabilirsiniz. 
            Aradığınız sorunun cevabını bulamadıysanız, bize iletişim sayfasından ulaşabilirsiniz.
          </p>
        </mat-card-content>
      </mat-card>

      <div *ngFor="let category of categories" class="category-section">
        <h3>{{ category }}</h3>
        <mat-accordion>
          <mat-expansion-panel *ngFor="let item of getFaqsByCategory(category)">
            <mat-expansion-panel-header>
              <mat-panel-title>
                {{ item.question }}
              </mat-panel-title>
            </mat-expansion-panel-header>
            <p>{{ item.answer }}</p>
          </mat-expansion-panel>
        </mat-accordion>
      </div>
    </div>
  `,
  styles: [`
    .container {
      max-width: 800px;
      margin: 32px auto;
      padding: 0 16px;
    }

    .intro-card {
      margin-bottom: 32px;
    }

    mat-card-title {
      color: #333;
      font-size: 24px;
      margin-bottom: 24px;
    }

    .category-section {
      margin-bottom: 32px;
    }

    h3 {
      color: #ff6000;
      margin: 24px 0 16px;
      font-size: 20px;
    }

    mat-expansion-panel {
      margin-bottom: 16px;
    }

    p {
      color: #666;
      line-height: 1.6;
    }

    mat-panel-title {
      color: #333;
    }
  `]
})
export class FaqComponent {
  faqs: FaqItem[] = [
    {
      category: 'Sipariş ve Ödeme',
      question: 'Siparişimi nasıl takip edebilirim?',
      answer: 'Siparişinizi "Hesabım > Siparişlerim" bölümünden veya ana sayfadaki "Sipariş Takip" linkinden takip edebilirsiniz.'
    },
    {
      category: 'Sipariş ve Ödeme',
      question: 'Hangi ödeme yöntemlerini kullanabilirim?',
      answer: 'Kredi kartı, banka kartı, havale/EFT ve kapıda ödeme seçeneklerini kullanabilirsiniz.'
    },
    {
      category: 'İade ve Değişim',
      question: 'Ürün iade sürecim nasıl işliyor?',
      answer: 'Ürünü teslim aldıktan sonra 14 gün içinde iade talebinde bulunabilirsiniz. İade talebinizi "Hesabım > Siparişlerim" bölümünden oluşturabilirsiniz.'
    },
    {
      category: 'İade ve Değişim',
      question: 'Değişim yapmak istiyorum, nasıl yapabilirim?',
      answer: 'Değişim için önce ürünü iade etmeniz, sonra yeni siparişinizi oluşturmanız gerekmektedir.'
    },
    {
      category: 'Kargo ve Teslimat',
      question: 'Kargo ücreti ne kadar?',
      answer: '150 TL ve üzeri alışverişlerinizde kargo ücretsizdir. 150 TL altındaki siparişlerde kargo ücreti 19.90 TL\'dir.'
    },
    {
      category: 'Kargo ve Teslimat',
      question: 'Teslimat ne kadar sürede yapılır?',
      answer: 'Siparişiniz genellikle 1-3 iş günü içinde teslim edilir. Stok durumu ve teslimat bölgenize göre bu süre değişebilir.'
    }
  ];

  get categories(): string[] {
    return [...new Set(this.faqs.map(faq => faq.category))];
  }

  getFaqsByCategory(category: string): FaqItem[] {
    return this.faqs.filter(faq => faq.category === category);
  }
} 