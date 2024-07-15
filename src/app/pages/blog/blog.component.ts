import { Component, inject } from '@angular/core';
import { PostComponent } from './post/post.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { SheetsApiService } from '../../sheets-api.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [PostComponent, SearchComponent, FormsModule, HttpClientModule],
  providers: [HttpClient],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})

export class BlogComponent {
  nome: string = '';
  email: string = '';
  mensagem: string = '';
  sheetsAPI = inject(SheetsApiService);

  onSubmit()
  {
    console.log(this.nome, this.email, this.mensagem)
    this.sheetsAPI.postDataAirtable(this.nome, this.email, this.mensagem);
  }
}
