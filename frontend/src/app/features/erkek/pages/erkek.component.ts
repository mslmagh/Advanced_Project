import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-erkek',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="erkek-container">
      <h1>Erkek</h1>
      <!-- Content will be added later -->
    </div>
  `,
  styles: [`
    .erkek-container {
      padding: 24px;
    }
  `]
})
export class ErkekComponent {} 