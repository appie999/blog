import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post = {
    title: 'Building Modern Web Applications with Angular',
    author: 'John Doe',
    date: new Date(),
    image: 'https://picsum.photos/800/400',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
              in culpa qui officia deserunt mollit anim id est laborum.`,
    tags: ['Angular', 'Web Development', 'Programming'],
    category: 'Technology',
    readTime: '5 min read'
  };

  constructor() { }

  ngOnInit(): void { }

  shareOnSocial(platform: string): void {
    // Implement sharing functionality
    console.log(`Sharing on ${platform}`);
  }
}
