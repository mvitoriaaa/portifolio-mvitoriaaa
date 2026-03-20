import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-formacao',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  template: `
    <section class="formacao" id="formacao">
      <div class="section-header" appReveal>
        <span class="section-num">05</span>
        <h2 class="section-title">Formação</h2>
        <div class="section-line"></div>
      </div>
      <div class="education-grid">
        <div class="edu-card" appReveal *ngFor="let edu of formacoes">
          <div class="edu-icon" [innerHTML]="edu.svg"></div>
          <div class="edu-badge" [class.done]="edu.done">
            {{ edu.done ? 'Concluído' : 'Em andamento' }}
          </div>
          <div class="edu-degree">{{ edu.degree }}</div>
          <div class="edu-institution">{{ edu.institution }}</div>
          <div class="edu-period">
            <span>{{ edu.done ? '✅' : '📅' }}</span> {{ edu.period }}
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrl: './formacao.component.scss',
})
export class FormacaoComponent {
  formacoes = [
    {
      done: false,
      degree: 'Ciências da Computação',
      institution: 'Fametro — Manaus, AM',
      period: '5° Período · 2022 – presente',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
        <polygon points="12 2 22 8.5 12 15 2 8.5 12 2"/>
        <path d="M7 11.5V17c0 0 2 2 5 2s5-2 5-2v-5.5"/>
        <line x1="22" y1="8.5" x2="22" y2="14"/>
        <circle cx="22" cy="14.5" r="0.8" fill="currentColor" stroke="none"/>
      </svg>`,
    },
    {
      done: true,
      degree: 'Técnico em Informática',
      institution: 'Escola Técnica',
      period: 'Curso técnico completo',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
        <rect x="2" y="3" width="20" height="13" rx="2"/>
        <path d="M8 21h8"/><path d="M12 17v4"/>
        <polyline points="9.5 10.5 12 8 14.5 10.5"/>
        <line x1="12" y1="8" x2="12" y2="14"/>
      </svg>`,
    },
  ];
}
