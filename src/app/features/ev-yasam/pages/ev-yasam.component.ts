import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ev-yasam',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="ev-yasam-container">
      <h1>Ev & Yaşam</h1>
      <!-- Content will be added later -->
    </div>
  `,
  styles: [`
    .ev-yasam-container {
      padding: 24px;
    }
  `]
})
export class EvYasamComponent {} 