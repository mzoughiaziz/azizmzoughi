import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { EXPERIENCE } from '../../data/experience.data';
import { ExperienceItem } from '../../models/experience.model';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [NgFor, RevealOnScrollDirective],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  readonly experience: ExperienceItem[] = EXPERIENCE;

  trackByRole(index: number, item: ExperienceItem): string {
    return item.role + item.company;
  }
}
