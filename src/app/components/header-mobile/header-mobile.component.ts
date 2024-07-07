import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-mobile',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './header-mobile.component.html',
  styleUrl: './header-mobile.component.css'
})
export class HeaderMobileComponent {
  @Input() cor: string = '#fff';
  menuOpen: boolean = false;

  toggleMenu() {
    console.log('Open menu');
    this.menuOpen = !this.menuOpen;
  }


}
