import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  template: `
    <section class="about" id="sobre">
      <div class="section-header" appReveal>
        <span class="section-num">01</span>
        <h2 class="section-title">Sobre mim</h2>
        <div class="section-line"></div>
      </div>
      <div class="about-grid">
        <div class="about-text" appReveal>
          <p>Sou estudante de <strong>Ciências da Computação</strong> na Fametro, cursando o 5° período,
            com uma trajetória que une <span class="accent">desenvolvimento de software</span>,
            infraestrutura de TI e ensino de tecnologia.</p>
          <p>Comecei com o <strong>Técnico em Informática</strong> e fui instrutora na Microlins.
            Desenvolvi sistemas como freelancer para a <strong>Sagatti</strong>, trabalhei na
            <strong>Amazonas Frigelar</strong> e hoje atuo na <strong>DigiBoard</strong> com
            monitoramento de infraestrutura usando Zabbix e Grafana.</p>
          <p>Minha paixão está em construir produtos que resolvem problemas reais, com código limpo
            e interfaces que as pessoas amam usar.</p>
        </div>
        <div class="about-details" appReveal>
          <div class="detail-item" *ngFor="let d of details">
            <div class="detail-icon">{{ d.icon }}</div>
            <div>
              <div class="detail-label">{{ d.label }}</div>
              <div class="detail-value">{{ d.value }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrl: './sobre.component.scss',
})
export class SobreComponent {
  details = [
    { icon: '📍', label: 'Localização', value: 'Manaus, Amazonas — BR' },
    { icon: '🎓', label: 'Formação', value: 'Ciências da Computação — Fametro' },
    { icon: '💼', label: 'Atual', value: 'DigiBoard — Monitoramento & Infra' },
    { icon: '⚡', label: 'Foco', value: 'Full-Stack · Infra · DevOps' },
  ];
}
