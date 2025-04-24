import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostDetailComponent } from "./post-detail/post-detail.component";
import { PostListComponent } from './post-list/post-list.component';

@Component({
  selector: 'app-root',
  imports: [PostDetailComponent, RouterOutlet, PostListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-blog';
}
