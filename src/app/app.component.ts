import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { ProjetosComponent } from './components/projetos/projetos.component';
import { FormacaoComponent } from './components/formacao/formacao.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { ContatoComponent } from './components/contato/contato.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    SobreComponent,
    SkillsComponent,
    ExperienciaComponent,
    ProjetosComponent,
    FormacaoComponent,
    EventosComponent,
    ContatoComponent,
    FooterComponent,
  ],
  template: `
    <app-navbar></app-navbar>
    <main>
      <app-hero></app-hero>
      <app-sobre></app-sobre>
      <app-skills></app-skills>
      <app-experiencia></app-experiencia>
      <app-projetos></app-projetos>
      <app-formacao></app-formacao>
      <app-eventos></app-eventos>
      <app-contato></app-contato>
    </main>
    <app-footer></app-footer>
  `,
})
export class AppComponent {}
