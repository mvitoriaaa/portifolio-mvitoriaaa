import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section
      class="hero"
      id="inicio"
      (pointermove)="onPointerMove($event)"
      (pointerleave)="onPointerLeave()"
      [style.--grid-offset-x.px]="gridOffsetX"
      [style.--grid-offset-y.px]="gridOffsetY"
      [style.--glow-x.%]="glowX"
      [style.--glow-y.%]="glowY"
    >
      <div class="hero-bg"></div>
      <div class="hero-grid"></div>
      <div class="hero-content">
        <div class="hero-tag">desenvolvedora full-stack</div>
        <h1 class="hero-name">
          Ola, sou
          <span>Maria Aparecida</span>
        </h1>
        <p class="hero-role">
          Ciencias da Computacao · <span class="highlight">Infraestrutura & Monitoramento</span> · Web Dev
        </p>
        <p class="hero-desc">
          Estudante de Ciencias da Computacao apaixonada por tecnologia, com experiencia em desenvolvimento
          de sistemas, monitoramento de infraestrutura e ensino. Construo solucoes que fazem a diferenca.
        </p>
        <div class="hero-cta">
          <a href="#projetos" class="btn-primary">Ver projetos</a>
          <a href="#contato" class="btn-outline">Entre em contato</a>
        </div>
      </div>
      <div class="hero-stats">
        <div class="stat">
          <div class="stat-number">5o</div>
          <div class="stat-label">periodo</div>
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
export class HeroComponent {
  gridOffsetX = 0;
  gridOffsetY = 0;
  glowX = 80;
  glowY = 50;

  onPointerMove(event: PointerEvent): void {
    const currentTarget = event.currentTarget as HTMLElement | null;

    if (!currentTarget) {
      return;
    }

    const rect = currentTarget.getBoundingClientRect();
    const relativeX = (event.clientX - rect.left) / rect.width;
    const relativeY = (event.clientY - rect.top) / rect.height;

    this.gridOffsetX = (relativeX - 0.5) * 32;
    this.gridOffsetY = (relativeY - 0.5) * 24;
    this.glowX = relativeX * 100;
    this.glowY = relativeY * 100;
  }

  onPointerLeave(): void {
    this.gridOffsetX = 0;
    this.gridOffsetY = 0;
    this.glowX = 80;
    this.glowY = 50;
  }
}
