import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',

})
export class SheetsApiService
{
  http = inject(HttpClient);
  url: string = 'https://api.airtable.com/v0/appJBgVq9hzThbkJf/Respostas';
  token: string = 'patzmcWCtyVe8CWDe.880bf251be7c8662467f9bd892eae5a92ff346cefa22dc7a1deccdb135500d80';

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
