import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { FaixaComponent } from '../../components/faixa/faixa.component';
import { CardComponent } from '../../components/card/card.component';
import { CardListComponent } from '../../components/card-list/card-list.component';
import { HeaderMobileComponent } from '../../components/header-mobile/header-mobile.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    FaixaComponent,
    CardListComponent,
    HeaderMobileComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
