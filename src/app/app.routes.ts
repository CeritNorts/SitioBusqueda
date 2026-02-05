import { Routes } from '@angular/router';
import { Layout } from './layout/layout';

import { Inicio } from './pages/inicio/inicio';
import { ElementosSitio } from './pages/elementos-sitio/elementos-sitio';
import { Menu } from './pages/menu/menu';
import { Breadcrumbs } from './pages/breadcrumbs/breadcrumbs';
import { MapaSitio } from './pages/mapa-sitio/mapa-sitio';
import { Busqueda } from './pages/busqueda/busqueda';
import { Error404 } from './pages/error-404/error-404';

export const routes: Routes = [
    {
    path: '',
    component: Layout,
    children: [
      { path: '', component: Inicio, pathMatch: 'full' },
      { path: 'elementos', component: ElementosSitio },
      { path: 'menu', component: Menu },
      { path: 'breadcrumbs', component: Breadcrumbs },
      { path: 'mapa-sitio', component: MapaSitio },
      { path: 'busqueda', component: Busqueda },
    ]
  },
  {
    path: '**',
    component: Error404
  }
];
