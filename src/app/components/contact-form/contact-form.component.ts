import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  loaded: boolean = false;
  formContact : FormGroup;

  constructor(private forms: FormBuilder) { 
    this.formContact = this.forms.group({
      from_name: new FormControl({ value: '', disabled: this.loaded }),
      from_email: new FormControl({ value: '', disabled: this.loaded }),
      subject: new FormControl({ value: '', disabled: this.loaded }),
      message: new FormControl({ value: '', disabled: this.loaded })
    });
  }

  async send() {
    if(this.loaded) return;
    this.loaded = true;
    if(process.env['PUBLIC_KEY_EMAILJS'] === undefined) return;
   emailjs.init(process.env['PUBLIC_KEY_EMAILJS']);
   let response = await emailjs.send("service_z9vita9","template_0652ea8",{
      from_name: this.formContact.value.from_name,
      to_name: "to_ name",
      from_email: this.formContact.value.from_email,
      subject: this.formContact.value.subject,
      message: this.formContact.value.message,
      });
      this.loaded = false;
    if(response.status === 200){
      alert('Email enviado com sucesso!!');
      this.formContact.reset();
    }
    else{
      alert('Erro ao enviar email, tente novamente.');
    }
    

  }

}
