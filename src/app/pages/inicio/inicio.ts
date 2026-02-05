import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule], // CommonModule permite usar directivas si prefieres, aunque usaremos el nuevo flujo
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {

  // Control de tarjetas (Tipado estricto)
  active: 'lineal' | 'jerarquica' | 'red' | null = null;

  select(type: 'lineal' | 'jerarquica' | 'red'): void {
    this.active = this.active === type ? null : type;
  }

  // Control de acordeón
  openAccordion: number | null = null;

  toggleAccordion(index: number): void {
    this.openAccordion = this.openAccordion === index ? null : index;
  }
}