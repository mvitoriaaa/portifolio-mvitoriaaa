import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  template: `
    <section id="skills">
      <div class="section-header" appReveal>
        <span class="section-num">02</span>
        <h2 class="section-title">Stack & Skills</h2>
        <div class="section-line"></div>
      </div>
      <div class="skills-categories">
        <div class="skill-category" appReveal *ngFor="let cat of categories">
          <h3>// {{ cat.title }}</h3>
          <div class="skills-grid">
            <div class="skill-chip" *ngFor="let skill of cat.skills">{{ skill }}</div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  categories = [
    {
      title: 'Frontend',
      skills: ['Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'SCSS', 'Bootstrap'],
    },
    {
      title: 'Backend & Linguagens',
      skills: ['Python', 'Java', 'C', 'C++'],
    },
    {
      title: 'Banco de Dados',
      skills: ['MySQL', 'SQL Server', 'MariaDB', 'Postman'],
    },
    {
      title: 'Infra & Monitoramento',
      skills: ['Zabbix', 'Grafana', 'Servidores', 'Gestão de Energia'],
    },
  ];
}
