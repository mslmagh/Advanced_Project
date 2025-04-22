import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-supermarket',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="supermarket-container">
      <h1>Süpermarket</h1>
      <!-- Content will be added later -->
    </div>
  `,
  styles: [`
    .supermarket-container {
      padding: 24px;
    }
  `]
})
export class SupermarketComponent {} 