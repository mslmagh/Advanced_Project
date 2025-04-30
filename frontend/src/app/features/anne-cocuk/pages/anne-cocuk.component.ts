import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-anne-cocuk',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="anne-cocuk-container">
      <h1>Anne & Çocuk</h1>
      <!-- Content will be added later -->
    </div>
  `,
  styles: [`
    .anne-cocuk-container {
      padding: 24px;
    }
  `]
})
export class AnneCocukComponent {} 