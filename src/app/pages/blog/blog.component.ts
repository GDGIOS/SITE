import { Component } from '@angular/core';
import { PostComponent } from './post/post.component';
import { SearchComponent } from './search/search.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [PostComponent, SearchComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

}
