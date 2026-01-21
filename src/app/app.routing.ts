import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsuariosComponent } from './components/usuarios/usuarios.component';

import { Route } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetallesComponent } from './pages/detalles/detalles.component';
import { BuscadorComponent } from './pages/buscador/buscador.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'usuario/:id', component: DetallesComponent },
  { path: 'buscador', component: BuscadorComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

export const Providers: any[] = [];
export const routing: ModuleWithProviders<Route> =
  RouterModule.forRoot(appRoutes);
