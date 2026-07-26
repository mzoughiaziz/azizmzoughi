import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { PROJECTS } from '../../data/projects.data';
import { Project } from '../../models/project.model';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor, NgIf, RevealOnScrollDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  readonly projects: Project[] = PROJECTS;

  trackByTitle(index: number, project: Project): string {
    return project.title;
  }
}
