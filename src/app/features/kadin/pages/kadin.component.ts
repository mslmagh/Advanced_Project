import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-kadin',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="kadin-container">
      <h1>Kadın</h1>
      <!-- Content will be added later -->
    </div>
  `,
  styles: [`
    .kadin-container {
      padding: 24px;
    }
  `]
})
export class KadinComponent {} 