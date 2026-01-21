import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { routing, Providers } from './app.routing';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './pages/home/home.component';
import { DetallesComponent } from './pages/detalles/detalles.component';
import { BuscadorComponent } from './pages/buscador/buscador.component';

@NgModule({
  declarations: [AppComponent, UsuariosComponent, NavComponent, HomeComponent, DetallesComponent, BuscadorComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    routing,
  ],
  providers: [Providers, UsuariosComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
