import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hobbies } from '../hobbies/hobbies';
import { Projects } from '../projects/projects';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,Hobbies,Projects],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
