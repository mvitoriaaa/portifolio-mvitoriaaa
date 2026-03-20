import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [RevealDirective],
  template: `
    <section id="contato">
      <div class="contact-wrapper" appReveal>
        <h2 class="contact-tagline">Vamos <span>trabalhar</span> juntos?</h2>
        <p class="contact-sub">
          Estou aberta a oportunidades de estágio, freelas e colaborações em projetos de desenvolvimento.
        </p>
        <div class="contact-links">
          <a href="mailto:seuemail@email.com" class="contact-link">✉ Email</a>
          <a href="https://linkedin.com/in/seuperfil" target="_blank" class="contact-link">in LinkedIn</a>
          <a href="https://github.com/seuperfil" target="_blank" class="contact-link">⌥ GitHub</a>
        </div>
      </div>
    </section>
  `,
  styleUrl: './contato.component.scss',
})
export class ContatoComponent {}
