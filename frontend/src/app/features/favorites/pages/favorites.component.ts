import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="favorites-container">
      <h1>Favorilerim</h1>
      <!-- Content will be added later -->
    </div>
  `,
  styles: [`
    .favorites-container {
      padding: 24px;
    }
  `]
})
export class FavoritesComponent {} 