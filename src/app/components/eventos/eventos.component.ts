import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  template: `
    <section id="eventos">
      <div class="section-header" appReveal>
        <span class="section-num">06</span>
        <h2 class="section-title">Eventos & Participações</h2>
        <div class="section-line"></div>
      </div>
      <div class="events-list">
        <div class="event-item" appReveal *ngFor="let e of eventos">
          <div class="event-dot"></div>
          <div class="event-name">{{ e.name }}</div>
          <div class="event-type">{{ e.type }}</div>
        </div>
      </div>
    </section>
  `,
  styleUrl: './eventos.component.scss',
})
export class EventosComponent {
  eventos = [
    { name: 'Inovatec — Fametro', type: 'Evento Acadêmico de Inovação' },
    { name: 'Instrutora — Microlins', type: 'Capacitação Tecnológica' },
    { name: 'Semanas Acadêmicas — Fametro', type: 'Participação e Networking' },
  ];
}
