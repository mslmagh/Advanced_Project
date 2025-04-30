import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  companyInfo = {
    name: 'Our Store',
    founded: '2024',
    mission: 'To provide high-quality products at affordable prices',
    vision: 'To become the leading online marketplace for unique products'
  };
}