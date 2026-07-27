import { Project } from '../models/project.model';

export const PROJECTS: Project[] = [
  {
    tagline: 'Symplicity Corporation · EdTech',
    title: 'Advocate — Student Case Management Platform',
    description: 'Built from initial architecture through production launch, now used by multiple U.S. university clients to manage student advocacy cases. Led accessibility work to meet WCAG standards.',
    image: 'images/project/project-image001.webp',
    tags: ['Angular 12+', 'TypeScript', 'SCSS', 'WCAG', 'GitLab']
  },
  {
    tagline: 'Natixis · Banking & Payments',
    title: 'Card Payment API & Transaction Platform',
    description: 'Fullstack work on a banking payment system supporting card transaction processing — the Card API alone handles more than 2.4 million calls per day in production.',
    image: 'images/project/project-bpce.jpg',
    tags: ['Spring Boot', 'Java 21', 'Angular', 'REST APIs', 'Jenkins']
  },
  {
    tagline: 'Freelance · Real Estate',
    title: 'Roberto Silveira Real Estate',
    description: 'A dynamic real estate website offering an extensive listing of homes, apartments, and commercial spaces tailored to client needs.',
    image: 'images/project/project-image03.webp',
    tags: ['React', 'Tailwind CSS', 'JavaScript'],
    link: 'https://roberto-silveira.vercel.app/',
    linkLabel: 'Visit site'
  },
  {
    tagline: 'Freelance · Legal',
    title: 'Brantes e Bastos Lawyer Firm',
    description: 'A modern law firm site combining credibility-building design with a WordPress blog, built to facilitate client interaction and inquiries.',
    image: 'images/project/project-image04.webp',
    tags: ['React', 'PHP', 'WordPress', 'MySQL'],
    link: 'https://brantesebastos.com.br/',
    linkLabel: 'Visit site'
  },
  {
    tagline: 'Agencia Six · Fintech Affiliate',
    title: 'C6 LiberSeguros Affiliate Platform',
    description: 'An affiliate platform enabling partners to generate financial gains through C6 Pay payment machines.',
    image: 'images/project/project-image055.webp',
    tags: ['Laravel', 'Blade', 'PHP']
  },
  {
    tagline: 'Freelance · Education',
    title: 'Percutrio Music School',
    description: 'A responsive landing page for a percussion music school, designed for aspiring percussionists and prospective students.',
    image: 'images/project/project-image02.webp',
    tags: ['HTML/CSS', 'Bootstrap', 'MySQL'],
    link: 'https://percutrio.vercel.app/',
    linkLabel: 'Visit site'
  }
];
