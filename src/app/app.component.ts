import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostDetailComponent } from "./component/post-detail/post-detail.component";

@Component({
  selector: 'app-root',
  imports: [PostDetailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-blog';
}
