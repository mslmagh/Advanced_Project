import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  categories = [
    { name: 'Kadın', path: '/kadin' },
    { name: 'Erkek', path: '/erkek' },
    { name: 'Anne & Çocuk', path: '/anne-cocuk' },
    { name: 'Ev & Yaşam', path: '/ev-yasam' },
    { name: 'Süpermarket', path: '/supermarket' },
    { name: 'Kozmetik', path: '/kozmetik' },
    { name: 'Ayakkabı & Çanta', path: '/ayakkabi-canta' },
    { name: 'Elektronik', path: '/elektronik' },
    { name: 'Çok Satanlar', path: '/cok-satanlar' },
    { name: 'Flaş Ürünler', path: '/flas-urunler' }
  ];
} 