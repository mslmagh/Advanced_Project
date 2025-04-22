import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ayakkabi-canta',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="ayakkabi-canta-container">
      <h1>Ayakkabı & Çanta</h1>
      <!-- Content will be added later -->
    </div>
  `,
  styles: [`
    .ayakkabi-canta-container {
      padding: 24px;
    }
  `]
})
export class AyakkabiCantaComponent {} 