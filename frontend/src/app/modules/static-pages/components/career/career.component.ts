import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';

interface JobPosition {
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
}

@Component({
  selector: 'app-career',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatExpansionModule],
  template: `
    <div class="container">
      <mat-card class="intro-card">
        <mat-card-header>
          <mat-card-title>Kariyer Fırsatları</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <h2>aldımgitti'de Kariyer</h2>
          <p>
            Türkiye'nin en hızlı büyüyen e-ticaret platformlarından biri olan aldımgitti'de, 
            teknoloji ve inovasyonu tutkuyla benimseyen, müşteri odaklı çalışanlarla birlikte 
            geleceği şekillendiriyoruz.
          </p>
        </mat-card-content>
      </mat-card>

      <div class="positions-container">
        <h3>Açık Pozisyonlar</h3>
        
        <mat-accordion>
          <mat-expansion-panel *ngFor="let position of positions">
            <mat-expansion-panel-header>
              <mat-panel-title>
                {{ position.title }}
              </mat-panel-title>
              <mat-panel-description>
                {{ position.department }} | {{ position.location }}
              </mat-panel-description>
            </mat-expansion-panel-header>

            <div class="position-details">
              <p><strong>Çalışma Şekli:</strong> {{ position.type }}</p>
              <p class="description">{{ position.description }}</p>
              
              <h4>Aranan Nitelikler:</h4>
              <ul>
                <li *ngFor="let requirement of position.requirements">
                  {{ requirement }}
                </li>
              </ul>

              <button mat-raised-button color="primary">Başvur</button>
            </div>
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

    h2 {
      color: #ff6000;
      margin-bottom: 16px;
    }

    h3 {
      color: #333;
      margin: 24px 0 16px;
      font-size: 20px;
    }

    h4 {
      color: #333;
      margin: 16px 0;
    }

    p {
      color: #666;
      line-height: 1.6;
      margin-bottom: 16px;
    }

    .positions-container {
      margin-top: 32px;
    }

    mat-expansion-panel {
      margin-bottom: 16px;
    }

    .position-details {
      padding: 16px 0;
    }

    ul {
      list-style-type: none;
      padding: 0;
      margin-bottom: 24px;
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

    button[color="primary"] {
      background-color: #ff6000;
    }
  `]
})
export class CareerComponent {
  positions: JobPosition[] = [
    {
      title: 'Senior Frontend Developer',
      department: 'Teknoloji',
      location: 'İstanbul',
      type: 'Tam Zamanlı',
      description: 'E-ticaret platformumuzun frontend geliştirme süreçlerinde aktif rol alacak, modern web teknolojilerini kullanarak kullanıcı deneyimini geliştirecek takım arkadaşı arıyoruz.',
      requirements: [
        'En az 5 yıl Angular deneyimi',
        'TypeScript ve modern JavaScript konularında uzmanlık',
        'Responsive tasarım ve cross-browser uyumluluk konularında deneyim',
        'Git versiyon kontrol sistemi deneyimi',
        'Agile/Scrum metodolojilerine hakimiyet'
      ]
    },
    {
      title: 'UX Designer',
      department: 'Tasarım',
      location: 'İstanbul',
      type: 'Tam Zamanlı',
      description: 'Kullanıcı deneyimi tasarımı konusunda uzman, e-ticaret platformumuzun UX süreçlerini yönetecek tasarımcı arıyoruz.',
      requirements: [
        'En az 3 yıl UX tasarım deneyimi',
        'Figma, Sketch gibi tasarım araçlarında uzmanlık',
        'Kullanıcı araştırması ve test süreçleri deneyimi',
        'E-ticaret projelerinde deneyim',
        'İyi derecede İngilizce'
      ]
    }
  ];
} 