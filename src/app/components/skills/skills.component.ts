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
            <div class="skill-chip" *ngFor="let skill of cat.skills">
              <i [class]="skill.icon"></i>
              <span>{{ skill.name }}</span>
            </div>
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
      skills: [
        { name: 'Angular',     icon: 'devicon-angular-plain colored' },
        { name: 'TypeScript',  icon: 'devicon-typescript-plain colored' },
        { name: 'JavaScript',  icon: 'devicon-javascript-plain colored' },
        { name: 'HTML5',       icon: 'devicon-html5-plain colored' },
        { name: 'CSS3',        icon: 'devicon-css3-plain colored' },
        { name: 'SCSS',        icon: 'devicon-sass-original colored' },
        { name: 'Bootstrap',   icon: 'devicon-bootstrap-plain colored' },
      ],
    },
    {
      title: 'Backend & Linguagens',
      skills: [
        { name: 'Python', icon: 'devicon-python-plain colored' },
        { name: 'Java',   icon: 'devicon-java-plain colored' },
        { name: 'C',      icon: 'devicon-c-plain colored' },
        { name: 'C++',    icon: 'devicon-cplusplus-plain colored' },
      ],
    },
    {
      title: 'Banco de Dados',
      skills: [
        { name: 'MySQL',      icon: 'devicon-mysql-plain colored' },
        { name: 'SQL Server', icon: 'devicon-microsoftsqlserver-plain colored' },
        { name: 'MariaDB',    icon: 'devicon-mariadb-plain colored' },
        { name: 'Postman',    icon: 'devicon-postman-plain colored' },
      ],
    },
    {
      title: 'Infra & Monitoramento',
      skills: [
        { name: 'Zabbix',   icon: 'devicon-linux-plain colored' },
        { name: 'Grafana',  icon: 'devicon-grafana-plain colored' },
        { name: 'Servidores', icon: 'devicon-ubuntu-plain colored' },
        { name: 'Git',      icon: 'devicon-git-plain colored' },
      ],
    },
  ];
}