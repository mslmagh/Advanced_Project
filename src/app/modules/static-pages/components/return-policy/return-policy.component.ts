import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-return-policy',
  standalone: true,
  imports: [CommonModule, MatCardModule, RouterModule],
  template: `
    <div class="container">
      <mat-card>
        <mat-card-header>
          <mat-card-title>İade ve Değişim Politikası</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <section>
            <h2>İade Koşulları</h2>
            <p>
              aldımgitti olarak müşteri memnuniyetini en üst düzeyde tutmak için çalışıyoruz. 
              Satın aldığınız ürünleri aşağıdaki koşullar çerçevesinde iade edebilirsiniz:
            </p>
            <ul>
              <li>Ürünü teslim aldığınız tarihten itibaren 14 gün içinde iade hakkınız bulunmaktadır.</li>
              <li>İade edilecek ürünün kullanılmamış ve orijinal ambalajında olması gerekmektedir.</li>
              <li>Kozmetik, kişisel bakım ürünleri ve iç giyim ürünlerinde hijyen sebebiyle iade kabul edilmemektedir.</li>
              <li>Özel olarak üretilen veya kişiselleştirilen ürünlerde iade kabul edilmemektedir.</li>
            </ul>
          </section>

          <section>
            <h2>İade Süreci</h2>
            <ol>
              <li>
                "Hesabım > Siparişlerim" bölümünden iade talebinde bulunun.
              </li>
              <li>
                İade nedeninizi belirtin ve ürünün fotoğraflarını yükleyin.
              </li>
              <li>
                İade talebiniz onaylandıktan sonra, size bir kargo kodu gönderilecektir.
              </li>
              <li>
                Ürünü orijinal ambalajında ve tüm aksesuarlarıyla birlikte kargoya verin.
              </li>
              <li>
                İade işleminiz tamamlandığında ödemeniz 3 iş günü içinde iade edilecektir.
              </li>
            </ol>
          </section>

          <section>
            <h2>Değişim İşlemleri</h2>
            <p>
              Değişim işlemleri için öncelikle ürünü iade etmeniz ve ardından yeni bir sipariş oluşturmanız gerekmektedir. 
              Bu şekilde size en hızlı şekilde hizmet verebiliriz.
            </p>
            <div class="note">
              <strong>Not:</strong> Değişim yapmak istediğiniz ürünün stoklarda bulunması gerekmektedir.
            </div>
          </section>

          <section>
            <h2>Kargo Ücreti</h2>
            <p>
              İade kargo ücreti, ürünün ayıplı olması durumunda firmamız tarafından karşılanmaktadır. 
              Cayma hakkı kullanımında ise kargo ücreti müşteriye aittir.
            </p>
          </section>

          <section>
            <h2>İletişim</h2>
            <p>
              İade ve değişim süreçleriyle ilgili sorularınız için 
              <a routerLink="/iletisim">iletişim sayfamızdan</a> bize ulaşabilir veya 
              0850 XXX XX XX numaralı müşteri hizmetleri hattımızı arayabilirsiniz.
            </p>
          </section>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .container {
      max-width: 800px;
      margin: 32px auto;
      padding: 0 16px;
    }

    mat-card {
      margin-bottom: 24px;
    }

    mat-card-title {
      color: #333;
      font-size: 24px;
      margin-bottom: 24px;
    }

    section {
      margin-bottom: 32px;
    }

    h2 {
      color: #ff6000;
      margin-bottom: 16px;
      font-size: 20px;
    }

    p {
      color: #666;
      line-height: 1.6;
      margin-bottom: 16px;
    }

    ul, ol {
      color: #666;
      line-height: 1.6;
      margin-bottom: 16px;
      padding-left: 20px;
    }

    li {
      margin-bottom: 12px;
    }

    .note {
      background-color: #fff3e0;
      border-left: 4px solid #ff6000;
      padding: 16px;
      margin: 16px 0;
      color: #666;
    }

    a {
      color: #ff6000;
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }
  `]
})
export class ReturnPolicyComponent {} 