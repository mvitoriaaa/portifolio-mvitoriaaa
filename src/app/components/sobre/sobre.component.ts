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
          <p>
            Sou estudante de <strong>Ciências da Computação</strong> na Fametro, cursando o 5° período,
            com uma trajetória que une <span class="accent">desenvolvimento de software</span>,
            infraestrutura de TI e ensino de tecnologia.
          </p>
          <p>
            Comecei com o <strong>Técnico em Informática</strong> e fui instrutora na Microlins.
            Desenvolvi sistemas como freelancer para a <strong>Sagatti</strong>, trabalhei na
            <strong>Amazonas Frigelar</strong> e hoje atuo na <strong>DigiBoard</strong> com
            monitoramento de infraestrutura usando Zabbix e Grafana.
          </p>
          <p>
            Minha paixão está em construir produtos que resolvem problemas reais, com código limpo
            e interfaces que as pessoas amam usar.
          </p>
        </div>

        <div class="about-details" appReveal>
          <div class="detail-item" *ngFor="let d of details">
            <div class="detail-icon" aria-hidden="true">
              <svg viewBox="0 0 16 16" focusable="false">
                <path *ngFor="let path of d.iconPaths" [attr.d]="path"></path>
              </svg>
            </div>
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
    {
      label: 'Localização',
      value: 'Manaus, Amazonas - BR',
      iconPaths: [
        'M8 16s6-5.686 6-10A6 6 0 1 0 2 6c0 4.314 6 10 6 10m0-7.5A2.5 2.5 0 1 1 8 3.5a2.5 2.5 0 0 1 0 5',
      ],
    },
    {
      label: 'Formação',
      value: 'Ciências da Computação - Fametro',
      iconPaths: [
        'M8.211.5a.5.5 0 0 0-.422 0l-7 3.5a.5.5 0 0 0 0 .894L2 5.5v4.633a1 1 0 0 0 .553.894l5 2.5a1 1 0 0 0 .894 0l5-2.5a1 1 0 0 0 .553-.894V5.5l1.211-.606a.5.5 0 0 0 0-.894zM8 1.559 14.438 4.5 8 7.441 1.562 4.5zM3 10.133V6l4.553 2.276a1 1 0 0 0 .894 0L13 6v4.133l-5 2.5z',
      ],
    },
    {
      label: 'Atual',
      value: 'DigiBoard - Monitoramento & Infra',
      iconPaths: [
        'M6.5 7a.5.5 0 0 1 .5.5V8h2v-.5a.5.5 0 0 1 1 0V8h1V5.5A1.5 1.5 0 0 0 10.5 4H10V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v1h-.5A1.5 1.5 0 0 0 4 5.5V8h1v-.5a.5.5 0 0 1 .5-.5M6 4V3h4v1z',
        'M0 9.5A1.5 1.5 0 0 1 1.5 8H4v.5a1.5 1.5 0 0 0 3 0V8h2v.5a1.5 1.5 0 0 0 3 0V8h2.5A1.5 1.5 0 0 1 16 9.5v4a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5z',
      ],
    },
    {
      label: 'Foco',
      value: 'Full-Stack - Infra - DevOps',
      iconPaths: [
        'M11.251 0a.5.5 0 0 1 .471.667L10.41 4H13.5a.5.5 0 0 1 .39.812l-7 8.5A.5.5 0 0 1 6 13V9H2.5a.5.5 0 0 1-.39-.812l8.75-8A.5.5 0 0 1 11.25 0',
      ],
    },
  ];
}
