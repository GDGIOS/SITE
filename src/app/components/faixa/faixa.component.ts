import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-faixa',
  standalone: true,
  imports: [
    CommonModule // Import CommonModule here
  ],
  templateUrl: './faixa.component.html',
  styleUrls: ['./faixa.component.css']
})
export class FaixaComponent {
  @Input() titulo: string = '';
  @Input() cor: string = '';
}
