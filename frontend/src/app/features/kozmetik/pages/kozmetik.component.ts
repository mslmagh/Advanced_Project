import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-kozmetik',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="kozmetik-container">
      <h1>Kozmetik</h1>
      <!-- Content will be added later -->
    </div>
  `,
  styles: [`
    .kozmetik-container {
      padding: 24px;
    }
  `]
})
export class KozmetikComponent {} 