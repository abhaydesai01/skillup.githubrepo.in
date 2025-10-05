import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';
import { GithubApiService, GitHubRepo } from '../../services/github-api';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, MarkdownModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects implements OnInit {
  repositories: GitHubRepo[] = [];
  selectedProject: GitHubRepo | null = null;
  readmeContent: string = '';
  loading = false;
  error = '';
  readmeLoading = false;
  readmeError = '';

  constructor(private githubService: GithubApiService) {}

  ngOnInit() {
    this.loadRepositories();
  }

  loadRepositories() {
    this.loading = true;
    this.error = '';
    
    this.githubService.getRepositories().subscribe({
      next: (repos) => {
        this.repositories = repos;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load projects. Please try again.';
        this.loading = false;
        console.error('Error loading repositories:', err);
      }
    });
  }

  selectProject(repo: GitHubRepo) {
    this.selectedProject = repo;
    this.loadReadme();
  }

  loadReadme() {
    if (!this.selectedProject) return;
    
    this.readmeLoading = true;
    this.readmeError = '';
    this.readmeContent = '';
    
    this.githubService.getReadme(this.selectedProject.name).subscribe({
      next: (content) => {
        this.readmeContent = content;
        this.readmeLoading = false;
      },
      error: (err) => {
        this.readmeError = 'Failed to load README. Please try again.';
        this.readmeLoading = false;
        console.error('Error loading README:', err);
      }
    });
  }

  closeModal() {
    this.selectedProject = null;
    this.readmeContent = '';
    this.readmeError = '';
  }

  trackByRepo(index: number, repo: GitHubRepo): number {
    return repo.id;
  }
}
