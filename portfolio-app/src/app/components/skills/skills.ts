import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubApiService, GitHubRepo } from '../../services/github-api';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills implements OnInit {
  // Static skills from resume
  programmingLanguages = [
    'JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'C#', 'PHP'
  ];

  frontendTechnologies = [
    'Angular', 'React', 'Vue.js', 'HTML5', 'CSS3', 'Sass/SCSS', 'Tailwind CSS', 'Bootstrap'
  ];

  backendTechnologies = [
    'Node.js', 'Express.js', 'Django', 'Spring Boot', '.NET Core', 'Laravel', 'PostgreSQL', 'MongoDB'
  ];

  toolsAndPlatforms = [
    'Git', 'GitHub', 'Docker', 'AWS', 'Azure', 'Firebase', 'Vercel', 'Netlify', 'VS Code'
  ];

  // Dynamic skills from GitHub
  githubSkills: string[] = [];
  loading = false;
  error = '';

  constructor(private githubService: GithubApiService) {}

  ngOnInit() {
    this.loadSkills();
  }

  loadSkills() {
    this.loading = true;
    this.error = '';
    
    this.githubService.getRepositories().subscribe({
      next: (repos) => {
        this.extractSkillsFromRepos(repos);
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load skills. Please try again.';
        this.loading = false;
        console.error('Error loading repositories for skills:', err);
      }
    });
  }

  private extractSkillsFromRepos(repos: GitHubRepo[]) {
    const skillsSet = new Set<string>();
    
    repos.forEach(repo => {
      // Add primary language
      if (repo.language) {
        skillsSet.add(repo.language);
      }
      
      // Add topics
      if (repo.topics) {
        repo.topics.forEach(topic => {
          skillsSet.add(topic);
        });
      }
    });
    
    this.githubSkills = Array.from(skillsSet).sort();
  }
}
