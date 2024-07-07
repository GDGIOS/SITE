import { Component } from '@angular/core';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderMobileComponent } from '../../components/header-mobile/header-mobile.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    ContactFormComponent,
    HeaderComponent,
    FooterComponent,
    HeaderMobileComponent
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
