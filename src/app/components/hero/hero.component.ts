import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section class="hero" id="inicio">
      <div class="hero-bg"></div>
      <div class="hero-grid"></div>
      <div class="hero-content">
        <div class="hero-tag">desenvolvedora full-stack</div>
        <h1 class="hero-name">
          Olá, eu sou
          <span>uma Dev.</span>
        </h1>
        <p class="hero-role">
          Ciências da Computação · <span class="highlight">Infraestrutura & Monitoramento</span> · Web Dev
        </p>
        <p class="hero-desc">
          Estudante de Ciências da Computação apaixonada por tecnologia, com experiência em desenvolvimento
          de sistemas, monitoramento de infraestrutura e ensino. Construo soluções que fazem a diferença.
        </p>
        <div class="hero-cta">
          <a href="#projetos" class="btn-primary">Ver projetos</a>
          <a href="#contato" class="btn-outline">Entre em contato</a>
        </div>
      </div>
      <div class="hero-stats">
        <div class="stat">
          <div class="stat-number">5°</div>
          <div class="stat-label">período</div>
        </div>
        <div class="stat">
          <div class="stat-number">14+</div>
          <div class="stat-label">tecnologias</div>
        </div>
        <div class="stat">
          <div class="stat-number">3+</div>
          <div class="stat-label">empresas</div>
        </div>
      </div>
    </section>
  `,
  styleUrl: './hero.component.scss',
})
export class HeroComponent {}
