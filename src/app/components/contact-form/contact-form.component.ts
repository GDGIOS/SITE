import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  Form,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css',
})
export class ContactFormComponent {
  loaded: boolean = false;
  formContact: FormGroup;

  constructor(private forms: FormBuilder) {
    this.formContact = this.forms.group({
      from_name: new FormControl({ value: '', disabled: this.loaded }),
      from_email: new FormControl({ value: '', disabled: this.loaded }),
      subject: new FormControl({ value: '', disabled: this.loaded }),
      message: new FormControl({ value: '', disabled: this.loaded }),
    });
  }
  async sendApi() {
    if (this.loaded) return;

    if (!this.formContact.valid) {
      alert('Preencha todos os campos');
      return;
    }

    this.loaded = true;
    // const apiUrl = 'https://api-gdgios.vercel.app';
    const apiUrl = 'https://api-gdgios.vercel.app';

    let response = await fetch(`${apiUrl}/api/send-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from_name: this.formContact.value.from_name,
        from_email: this.formContact.value.from_email,
        subject: this.formContact.value.subject,
        message: this.formContact.value.message,
        reply_to: this.formContact.value.from_email,
      }),
    });
    this.loaded = false;

    const responseJson = await response.json();

    console.log(responseJson);

    if (response.status === 200) {
      this.formContact.reset();
    }

    alert(responseJson.message);
  }
}
