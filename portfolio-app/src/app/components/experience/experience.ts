import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface WorkExperience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

interface Education {
  id: number;
  degree: string;
  institution: string;
  period: string;
  description: string;
  gpa?: string;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})
export class Experience {
  workExperience: WorkExperience[] = [
     {
    id: 1,
    title: 'Software Development Engineer',
    company: 'Cybage Software Pvt. Ltd, Pune',
    period: 'August 2022 – Present',
    description: `Engaged in full-stack development using Java, Spring Boot, and Angular. Led containerization and Kubernetes deployments. Developed secure cross-system file transfers and CI/CD pipelines.`,
    technologies: ['Java', 'Spring Boot', 'Angular', 'Docker', 'Kubernetes', 'Jenkins', 'SFTP']
  }
  ];

  educationHistory: Education[] = [
    {
    id: 1,
    degree: 'B.Tech in Computer Science & Engineering',
    institution: 'MIT World Peace University, Pune',
    period: '2018 – 2022',
    description: 'Studied software engineering, algorithms, web technologies, and DevOps fundamentals.',
    gpa: '8.7/10'
  },
  {
    id: 2,
    degree: 'High School (Science)',
    institution: 'DAV Public School, Panvel',
    period: '2016 – 2018',
    description: 'Completed higher secondary education with Physics, Chemistry, Mathematics, and Computer Science.'
  }
  ];

  trackByExperience(index: number, experience: WorkExperience): number {
    return experience.id;
  }

  trackByEducation(index: number, education: Education): number {
    return education.id;
  }

downloadResume() {
  window.open('https://drive.google.com/file/d/1OlCn68yTVdG74CHSvIkowbsM1iHgILqf/view?usp=sharing', '_blank');
}


}
