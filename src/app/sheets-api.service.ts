import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import apiKeys from '../../api-keys';


@Injectable({
  providedIn: 'root',

})
export class SheetsApiService
{
  http = inject(HttpClient);
  url: string = 'https://api.airtable.com/v0/appJBgVq9hzThbkJf/Respostas';
  token: string = apiKeys.Airtable;

  async postDataAirtable(nome: string, email: string, mensagem: string)
  {
    const body = JSON.stringify({
      "records": [
        {
          "fields": {
            "Nome": nome,
            "E-mail": email,
            "Escreva o assunto aqui:": mensagem
          }
        },
      ]
    });
    const options = {
      headers: {
        'Authorization': `Bearer ${this.token}`,
        'Content-Type': 'application/json',
      },
    };

    this.http.post(this.url, body, options).subscribe(response => {
      console.log(response);
    });
  }
}
