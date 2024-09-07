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
      image: '../../assets/membros/carol.jpeg',
      nome: 'Ana Carol Neris Fonseca',
      cargo: 'Organizer',
      redesSociais: [
        {
          icone: '../../assets/icon_github.png',
          link: 'https://github.com/CarolineNeris',
        },
        {
          icone: '../../assets/icon_linkedin.png',
          link: 'https://www.linkedin.com/in/anacarolinefonseca/',
        },
      ],
    },
    {
      image: '../../assets/membros/beatriz.jpeg',
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
      image: '../../assets/membros/luis.jpeg',
      nome: 'Luis Eduardo Barbosa Soares Rocha',
      cargo: 'Organizer',
      redesSociais: [
        {
          icone: '../../assets/icon_github.png',
          link: 'https://github.com/eduardsroch',
        },
        {
          icone: '../../assets/icon_linkedin.png',
          link: 'https://www.linkedin.com/in/eduardsroch/',
        },
      ],
    },
    {
      image: '../../assets/membros/nathalie.jpeg',
      nome: 'Náthalie Lima Bomfim',
      cargo: 'Organizer',
      redesSociais: [
        {
          icone: '../../assets/icon_github.png',
          link: 'https://github.com/NathalieLima',
        },
        {
          icone: '../../assets/icon_linkedin.png',
          link: 'https://www.linkedin.com/in/nathalie-lima3/',
        },
      ],
    },
    {
      image: '../../assets/membros/semfoto.jpg',
      nome: 'Diogo Cerqueira',
      cargo: 'Membro',
      redesSociais: [
        {
          icone: '../../assets/icon_github.png',
          link: 'https://github.com/nwiry',
        },
        {
          icone: '../../assets/icon_linkedin.png',
          link: 'https://www.linkedin.com/in/diogocerq/',
        },
      ],
    },
    {
      image: '../../assets/membros/everaldina.jpeg',
      nome: 'Everaldina Guimarães Barbosa',
      cargo: 'Membro',
      redesSociais: [
        {
          icone: '../../assets/icon_github.png',
          link: 'https://github.com/everaldina',
        },
        {
          icone: '../../assets/icon_linkedin.png',
          link: 'https://www.linkedin.com/in/everaldina-barbosa',
        },
      ],
    },
    {
      image: '../../assets/membros/mateus.jpeg',
      nome: 'Matheus Nascimento',
      cargo: 'Membro',
      redesSociais: [
        {
          icone: '../../assets/icon_github.png',
          link: 'https://github.com/mfnswdev',
        },
        {
          icone: '../../assets/icon_linkedin.png',
          link: 'https://www.linkedin.com/in/planningwiththeus/',
        },
      ],
    },
    {
      image: '../../assets/membros/joao.jpeg',
      nome: 'João Manoel A.',
      cargo: 'Membro',
      redesSociais: [
        {
          icone: '../../assets/icon_github.png',
          link: 'https://github.com/John-Parsec',
        },
        {
          icone: '../../assets/icon_linkedin.png',
          link: 'https://www.linkedin.com/in/jmaoliveira',
        },
      ],
    },

  ];
}
