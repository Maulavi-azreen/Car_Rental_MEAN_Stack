import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  activeTab: string = 'hourly'; // Default tab

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

}
