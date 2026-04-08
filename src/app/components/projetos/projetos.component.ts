import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  template: `
    <section id="projetos">
      <div class="section-header" appReveal>
        <span class="section-num">04</span>
        <h2 class="section-title">Projetos</h2>
        <div class="section-line"></div>
      </div>

      <div class="projects-grid">
        <a
          class="project-card"
          appReveal
          *ngFor="let p of projetos"
          [attr.href]="p.link !== '#' ? p.link : null"
          [attr.target]="p.link !== '#' ? '_blank' : null"
          [attr.rel]="p.link !== '#' ? 'noopener noreferrer' : null"
          [class.project-card--disabled]="p.link === '#'"
        >
          <div class="project-num">{{ p.num }}</div>
          <h3 class="project-title">{{ p.title }}</h3>
          <p class="project-desc">{{ p.desc }}</p>
          <div class="project-tags">
            <span class="tag" *ngFor="let t of p.tags">{{ t }}</span>
          </div>
          <span class="project-link">
            <span>{{ p.link !== '#' ? 'Ver projeto' : 'Em breve' }}</span>
            <svg
              *ngIf="p.link !== '#'"
              class="project-link-icon"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M7 17 17 7M9 7h8v8"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.8"
              />
            </svg>
          </span>
        </a>
      </div>
    </section>
  `,
  styleUrl: './projetos.component.scss',
})
export class ProjetosComponent {
  projetos = [
    {
      num: '001 - Freelancer · Amazonas Refrilar',
      title: 'Plataforma completa de gerenciamento para a Amazonas Refrilar',
      desc: 'Aplicacao web em Angular para o setor de refrigeracao.',
      tags: ['Typescript', 'SQLite', 'HTML/SCSS', 'Bootstrap', 'Angular'],
      link: 'https://portifolio-arkill.vercel.app',
    },
    {
      num: '002 - DigiBoard',
      title: 'Dashboard de Monitoramento de Energia',
      desc: 'Solucao de monitoramento em tempo real do consumo energetico de servidores. Dashboards Grafana integrados com Zabbix para metricas e alertas criticos. Link em breve.',
      tags: ['Grafana', 'Zabbix', 'Infra', 'Monitoramento'],
      link: '#',
    },
    {
      num: '003 - Academico',
      title: 'Projetos Universitarios - Fametro',
      desc: 'Projetos academicos ao longo dos 5 periodos: estruturas de dados, algoritmos, banco de dados e desenvolvimento web. Link em breve.',
      tags: ['C/C++', 'Java', 'Python', 'SQL Server'],
      link: '#',
    },
    {
      num: '004 - Projeto de reconhecimento de gestos',
      title: 'Projeto de visao computacional para reconhecimento de gestos',
      desc: 'Este projeto usa webcam + OpenCV + MediaPipe para reconhecer gestos com a mao em tempo real.',
      tags: ['C/C++', 'Java', 'Python', 'SQL Server'],
      link: 'https://github.com/mvitoriaaa/Projeto_mapeamento_gesto',
    },
  ];
}
