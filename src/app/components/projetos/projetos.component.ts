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
        <h2 class="section-title">Projetos </h2>
        <div class="section-line"></div>
      </div>
      <div class="projects-grid">
        <div class="project-card" appReveal *ngFor="let p of projetos">
          <div class="project-num">{{ p.num }}</div>
          <h3 class="project-title">{{ p.title }}</h3>
          <p class="project-desc">{{ p.desc }}</p>
          <div class="project-tags">
            <span class="tag" *ngFor="let t of p.tags">{{ t }}</span>
          </div>
          <a [href]="p.link" class="project-link">Ver projeto →</a>
        </div>
      </div>
    </section>
  `,
  styleUrl: './projetos.component.scss',
})
export class ProjetosComponent {
  projetos = [
    {
      num: '001 — Freelancer · Amazonas Refrilar',
      title: 'Plataforma completa de gerenciamento para a Amazonas Refrilar',
      desc: 'Angular Frontend Aplicação web construída com o framework Angular para o setor de refrigeração.',
      tags: ['Typescript', 'SQLite', 'HTML/SCSS', 'Bootstrap','Angular'],
      link: 'portifolio-arkill.vercel.app',
    },
    {
      num: '002 — DigiBoard',
      title: 'Dashboard de Monitoramento de Energia',
      desc: 'Solução de monitoramento em tempo real do consumo energético de servidores. Dashboards Grafana integrados com Zabbix para métricas e alertas críticos.  LINK EM BREVE',
      tags: ['Grafana', 'Zabbix', 'Infra', 'Monitoramento'],
      link: '#',
    },
    {
      num: '003 — Acadêmico',
      title: 'Projetos Universitários — Fametro',
      desc: 'Projetos acadêmicos ao longo dos 5 períodos: estruturas de dados, algoritmos, banco de dados e desenvolvimento web.  LINK EM BREVE',
      tags: ['C/C++', 'Java', 'Python', 'SQL Server'],
      link: '#',
    },

    {
      num: '004 — Projeto de reconhecimento de gestos',
      title: 'Projeto de visão computacional para reconhecimento de gestos',
      desc: 'Este projeto usa webcam + OpenCV + MediaPipe para reconhecer gestos com a mao em tempo real.  LINK EM BREVE',
      tags: ['C/C++', 'Java', 'Python', 'SQL Server'],
      link: 'https://github.com/mvitoriaaa/Projeto_mapeamento_gesto',
    },
  ];
}
