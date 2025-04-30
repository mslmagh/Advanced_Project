import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-elektronik',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="elektronik-container">
      <h1>Elektronik</h1>
      <!-- Content will be added later -->
    </div>
  `,
  styles: [`
    .elektronik-container {
      padding: 24px;
    }
  `]
})
export class ElektronikComponent {} 