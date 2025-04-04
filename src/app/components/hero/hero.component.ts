import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  countdown: string = '';
  stats = [
    { value: 500, label: 'Cars Available' },
    { value: 1000000, label: 'Happy Customers' },
    { value: 150, label: 'Locations Covered' },
    { value: 50, label: 'Company Tie-ups' }
  ];

  ngOnInit() {
   this.startCountDown(3*24*60*60)
  }

  startCountDown(seconds: number) {
    setInterval(()=>{
      const days=Math.floor(seconds/(60*60*24))
      const hours=Math.floor((seconds%(60*60*24))/(60*60))
      const minutes=Math.floor((seconds%(60*60))/60)
      const secs=seconds % 60
      this.countdown = `${days}d ${hours}h ${minutes}m ${secs}s`;
      seconds--;
    },1000)
  }
}
