import { Routes } from '@angular/router';
import { PostDetailComponent } from './component/post-detail/post-detail.component';
import { HomeComponent } from './component/home/home.component';

export const routes: Routes = [
  { path: 'post/:id', component: PostDetailComponent },
  {path: '', component: HomeComponent}

]