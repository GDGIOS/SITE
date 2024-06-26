import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

interface RedeSocial {
  icone: string;
  link: string;
}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() image: string = '';
  @Input() nome: string = '';
  @Input() cargo: string = '';
  @Input() redesSociais: RedeSocial[] = [];

}
