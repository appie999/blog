import { Routes } from '@angular/router';
import { PostDetailComponent } from './component/post-detail/post-detail.component';

export const routes: Routes = [
  { path: 'post/:id', component: PostDetailComponent },
  { path: '', redirectTo: '/post/1', pathMatch: 'full' }
];
