import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-link',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-link.html',
  styleUrl: './blog-link.css'
})
export class BlogLink {
  openBlog() {
    window.open('https://www.teknogeeks.in', '_blank', 'noopener,noreferrer');
  }
}
