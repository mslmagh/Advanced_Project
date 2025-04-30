import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule],
  template: `
    <svg class="icon" [class]="name">
      <use [attr.href]="'assets/icons/sprite.svg#' + name"></use>
    </svg>
  `,
  styles: [`
    .icon {
      width: 24px;
      height: 24px;
      fill: currentColor;
    }
  `]
})
export class IconComponent {
  @Input() name!: string;
} 