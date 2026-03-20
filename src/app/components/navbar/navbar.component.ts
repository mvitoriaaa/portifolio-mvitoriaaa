import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav>
      <div class="nav-logo">// portfolio.dev</div>
      <ul class="nav-links">
        <li><a href="#sobre">sobre</a></li>
        <li><a href="#skills">skills</a></li>
        <li><a href="#experiencia">experiência</a></li>
        <li><a href="#projetos">projetos</a></li>
        <li><a href="#formacao">formação</a></li>
        <li><a href="#contato">contato</a></li>
      </ul>
      <button class="menu-toggle" (click)="toggleMenu()">
        <span></span><span></span><span></span>
      </button>
    </nav>
    <div class="mobile-menu" [class.open]="menuOpen">
      <a href="#sobre" (click)="toggleMenu()">sobre</a>
      <a href="#skills" (click)="toggleMenu()">skills</a>
      <a href="#experiencia" (click)="toggleMenu()">experiência</a>
      <a href="#projetos" (click)="toggleMenu()">projetos</a>
      <a href="#formacao" (click)="toggleMenu()">formação</a>
      <a href="#contato" (click)="toggleMenu()">contato</a>
    </div>
  `,
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  menuOpen = false;
  toggleMenu() { this.menuOpen = !this.menuOpen; }
}
