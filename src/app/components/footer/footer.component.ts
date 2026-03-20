import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer>
      <p>© 2025 <span>portfolio.dev</span> — Todos os direitos reservados</p>
      <p>Feito com <span>♥</span> em Manaus, AM</p>
    </footer>
  `,
  styleUrl: './footer.component.scss',
})
export class FooterComponent {}
