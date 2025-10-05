import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Projects } from './components/projects/projects';
import { Skills } from './components/skills/skills';
import { Experience } from './components/experience/experience';
import { Contact } from './components/contact/contact';
import { BlogLink } from './components/blog-link/blog-link';
import { Certificates } from './components/certificates/certificates';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'projects', component: Projects },
  { path: 'skills', component: Skills },
  { path: 'experience', component: Experience },
  { path: 'contact', component: Contact },
  { path: 'blog', component: BlogLink },
  { path: 'certificates', component: Certificates },
  { path: '**', redirectTo: '' }
];
