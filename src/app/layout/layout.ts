import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { Breadcrumb } from '../component/shared/breadcrumb/breadcrumb';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterModule, FormsModule, Breadcrumb],
  templateUrl: './layout.html',
  styleUrls: ['./layout.css']
})
export class Layout {
  quickQuery = '';
  menuOpen = false; // <-- Nueva variable

  constructor(private router: Router) {}

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  goSearch(): void {
    const q = (this.quickQuery || '').trim();
    this.menuOpen = false; // Cerramos menú al buscar
    this.router.navigate(['/busqueda'], { queryParams: { q } });
  }
}