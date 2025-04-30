import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  template: `
    <div class="container">
      <mat-card>
        <mat-card-header>
          <mat-card-title>Gizlilik Politikası</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <section>
            <h2>Giriş</h2>
            <p>
              aldımgitti olarak kişisel verilerinizin güvenliği konusunda büyük hassasiyet gösteriyoruz. 
              Bu gizlilik politikası, hangi verilerinizi nasıl topladığımızı ve kullandığımızı açıklamaktadır.
            </p>
          </section>

          <section>
            <h2>Toplanan Veriler</h2>
            <p>Aşağıdaki kişisel verilerinizi toplamaktayız:</p>
            <ul>
              <li>Ad, soyad, e-posta adresi gibi kimlik bilgileri</li>
              <li>Teslimat adresi ve fatura bilgileri</li>
              <li>Alışveriş geçmişi ve sipariş bilgileri</li>
              <li>Site kullanım alışkanlıkları ve tercihleri</li>
              <li>Müşteri hizmetleri görüşme kayıtları</li>
            </ul>
          </section>

          <section>
            <h2>Verilerin Kullanımı</h2>
            <p>Topladığımız verileri aşağıdaki amaçlarla kullanmaktayız:</p>
            <ul>
              <li>Siparişlerinizi işleme almak ve teslimatını sağlamak</li>
              <li>Müşteri hizmetleri desteği sunmak</li>
              <li>Ürün ve hizmetlerimizi geliştirmek</li>
              <li>Size özel kampanya ve teklifler sunmak</li>
              <li>Yasal yükümlülüklerimizi yerine getirmek</li>
            </ul>
          </section>

          <section>
            <h2>Veri Güvenliği</h2>
            <p>
              Kişisel verilerinizin güvenliğini sağlamak için aşağıdaki önlemleri almaktayız:
            </p>
            <ul>
              <li>SSL şifreleme teknolojisi kullanımı</li>
              <li>Düzenli güvenlik güncellemeleri</li>
              <li>Veri erişim kontrolü ve yetkilendirme</li>
              <li>Düzenli güvenlik testleri ve denetimleri</li>
            </ul>
          </section>

          <section>
            <h2>Çerezler (Cookies)</h2>
            <p>
              Web sitemizde çerezler kullanılmaktadır. Çerezler, size daha iyi bir alışveriş deneyimi 
              sunmamıza ve site performansını analiz etmemize yardımcı olmaktadır.
            </p>
          </section>

          <section>
            <h2>Veri Paylaşımı</h2>
            <p>
              Kişisel verileriniz, yasal zorunluluklar dışında üçüncü taraflarla paylaşılmamaktadır. 
              Verileriniz sadece hizmet sağlayıcılarımız (kargo şirketleri, ödeme sistemleri vb.) 
              ile hizmet gereklilikleri kapsamında paylaşılmaktadır.
            </p>
          </section>

          <section>
            <h2>Haklarınız</h2>
            <p>KVKK kapsamında aşağıdaki haklara sahipsiniz:</p>
            <ul>
              <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
              <li>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme</li>
              <li>Kişisel verilerinizin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</li>
              <li>Yurt içinde veya yurt dışında kişisel verilerinizin aktarıldığı üçüncü kişileri bilme</li>
              <li>Kişisel verilerinizin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme</li>
              <li>KVKK ve ilgili diğer kanun hükümlerine uygun olarak işlenmiş olmasına rağmen, işlenmesini gerektiren sebeplerin ortadan kalkması hâlinde kişisel verilerinizin silinmesini veya yok edilmesini isteme</li>
            </ul>
          </section>

          <section>
            <h2>İletişim</h2>
            <p>
              Gizlilik politikamız hakkında sorularınız için kvkk&#64;aldimgitti.com adresinden 
              bize ulaşabilirsiniz.
            </p>
          </section>

          <div class="update-info">
            <p>Son güncelleme tarihi: 01.03.2024</p>
          </div>
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

    ul {
      list-style-type: none;
      padding: 0;
      margin-bottom: 16px;
    }

    li {
      color: #666;
      margin-bottom: 8px;
      padding-left: 20px;
      position: relative;
    }

    li:before {
      content: "•";
      color: #ff6000;
      position: absolute;
      left: 0;
    }

    .update-info {
      margin-top: 48px;
      padding-top: 16px;
      border-top: 1px solid #eee;
    }

    .update-info p {
      color: #999;
      font-size: 14px;
      margin: 0;
    }
  `]
})
export class PrivacyComponent {} 