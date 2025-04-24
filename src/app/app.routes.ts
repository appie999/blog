import { Routes } from '@angular/router';
import { PostDetailComponent } from './component/post-detail/post-detail.component';
import { HomeComponent } from './component/home/home.component';
import { PostListComponent } from './component/post-list/post-list.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  { path: 'post/:id', component: PostDetailComponent },
  { path: 'list', component:  PostListComponent}
]