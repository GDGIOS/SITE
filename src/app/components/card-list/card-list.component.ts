import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
interface RedeSocial {
  icone: string;
  link: string;
}

interface Membro {
  image: string;
  nome: string;
  cargo: string;
  redesSociais: RedeSocial[];
}
@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css',
})
export class CardListComponent {
  membros: Membro[] = [
    {
      image: 'path/to/igor-image.png',
      nome: 'Ana Carol Neris Fonseca',
      cargo: 'Organizer',
      redesSociais: [
        {
          icone: '../../assets/icon_github.png',
          link: 'https://facebook.com/igor',
        },
        {
          icone: '../../assets/icon_linkedin.png',
          link: 'https://linkedin.com/in/igor',
        },
      ],
    },
    {
      image: '../../assets/membros/beatriz.jpg',
      nome: 'Beatriz Pereira Aragão',
      cargo: 'Organizer',
      redesSociais: [
        {
          icone: '../../assets/icon_github.png',
          link: 'https://github.com/Beatriz-ux',
        },
        {
          icone: '../../assets/icon_linkedin.png',
          link: 'https://www.linkedin.com/in/beatriz-pereira-81467317b/',
        },
      ],
    },
    {
      image: 'path/to/joao-image.png',
      nome: 'Luis Eduardo Barbosa Soares Rocha',
      cargo: 'Organizer',
      redesSociais: [
        {
          icone: '../../assets/icon_github.png',
          link: 'https://facebook.com/joao',
        },
        {
          icone: '../../assets/icon_linkedin.png',
          link: 'https://linkedin.com/in/joao',
        },
      ],
    },
    {
      image: 'path/to/joao-image.png',
      nome: 'Náthalie Lima Bomfim',
      cargo: 'Organizer',
      redesSociais: [
        {
          icone: '../../assets/icon_github.png',
          link: 'https://facebook.com/joao',
        },
        {
          icone: '../../assets/icon_linkedin.png',
          link: 'https://linkedin.com/in/joao',
        },
      ],
    },
  ];
}
