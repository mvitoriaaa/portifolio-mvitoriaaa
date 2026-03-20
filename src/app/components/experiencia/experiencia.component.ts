import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../directives/reveal.directive';

export interface Experiencia {
  date: string;
  role: string;
  company: string;
  desc: string;
  tags: string[];
}

@Component({
  selector: 'app-experiencia',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  template: `
    <section class="experience" id="experiencia">
      <div class="section-header" appReveal>
        <span class="section-num">03</span>
        <h2 class="section-title">Experiência</h2>
        <div class="section-line"></div>
      </div>
      <div class="timeline">
        <div class="timeline-item" appReveal *ngFor="let exp of experiencias">
          <div class="timeline-date">{{ exp.date }}</div>
          <div class="timeline-content">
            <div class="timeline-role">{{ exp.role }}</div>
            <div class="timeline-company">{{ exp.company }}</div>
            <p class="timeline-desc">{{ exp.desc }}</p>
            <div class="timeline-tags">
              <span class="tag" *ngFor="let tag of exp.tags">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrl: './experiencia.component.scss',
})
export class ExperienciaComponent {
  experiencias: Experiencia[] = [
    {
      date: 'atual',
      role: 'Analista de TI & Monitoramento',
      company: 'DigiBoard',
      desc: 'Gerenciamento e monitoramento de infraestrutura de TI utilizando Zabbix e Grafana. Desenvolvimento de dashboards de monitoramento de energia — medição de consumo e eficiência de servidores.',
      tags: ['Zabbix', 'Grafana', 'Monitoramento', 'Infraestrutura', 'Gestão de Energia'],
    },
    {
      date: 'anterior',
      role: 'Desenvolvedora de Sistemas',
      company: 'Amazonas Frigelar',
      desc: 'Atuação no desenvolvimento e manutenção de sistemas internos. Contribuição com soluções tecnológicas para otimização de processos operacionais.',
      tags: ['Desenvolvimento', 'Sistemas', 'TI Corporativa'],
    },
    {
      date: 'freelancer',
      role: 'Desenvolvedora Freelancer',
      company: 'Sagatti',
      desc: 'Desenvolvimento de sistema de gerenciamento de veículos — desde o levantamento de requisitos até a entrega. Sistema completo com cadastro, controle de frota e relatórios de gestão.',
      tags: ['Full-Stack', 'Gestão de Veículos', 'MySQL', 'JavaScript'],
    },
    {
      date: 'ensino',
      role: 'Instrutora de Informática',
      company: 'Microlins',
      desc: 'Instrução e capacitação de alunos em tecnologia da informação. Desenvolvimento de habilidades didáticas e comunicação técnica.',
      tags: ['Ensino', 'Informática', 'Didática'],
    },
  ];
}
