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
          <div class="edu-logo-wrapper">
          <img class="edu-logo" [src]="edu.logo" [alt]="edu.institution">
          </div>
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
    logo: 'assets/Logo600-removebg-preview.png',
  },
  {
    done: true,
    degree: 'Técnico em Informática',
    institution: 'Cetam',
    period: 'Curso técnico completo',
    logo: 'assets/cetam_gov_am_2023_colorido-removebg-preview.png',
  },
];
}
