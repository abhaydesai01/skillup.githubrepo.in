import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  language: string | null;
  topics: string[];
  created_at: string;
  updated_at: string;
}

export interface GitHubReadme {
  content: string;
  encoding: string;
}

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {
  private readonly baseUrl = 'https://api.github.com';
  private readonly username = 'AtharvaGulhane';

  constructor(private http: HttpClient) { }

  getRepositories(): Observable<GitHubRepo[]> {
    return this.http.get<GitHubRepo[]>(`${this.baseUrl}/users/${this.username}/repos`)
      .pipe(
        map(repos => repos.filter(repo => !repo.name.includes('.github.io'))) // Filter out the portfolio repo
      );
  }

  getReadme(repoName: string): Observable<string> {
    return this.http.get<GitHubReadme>(`${this.baseUrl}/repos/${this.username}/${repoName}/readme`)
      .pipe(
        map(readme => {
          // Decode base64 content
          return atob(readme.content);
        })
      );
  }

  getLanguages(repoName: string): Observable<Record<string, number>> {
    return this.http.get<Record<string, number>>(`${this.baseUrl}/repos/${this.username}/${repoName}/languages`);
  }
}
