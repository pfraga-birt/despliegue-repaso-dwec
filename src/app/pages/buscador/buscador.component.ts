import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { Usuario } from '../../interface/usuario';

@Component({
  selector: 'app-buscador',
  standalone: false,
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css',
})
export class BuscadorComponent implements OnInit {
  usuarios: Usuario[] = [];
  termino = '';

  usuariosFiltrados: Usuario[] = [];
  constructor(private userService: UsuariosService) {}

  ngOnInit(): void {
    this.userService.fetchUsers().then((usuarios) => {
      this.usuarios = usuarios;
      this.usuariosFiltrados = usuarios;
    });
  }

  onChangeTermino(): void {
    let valor = this.termino.toLowerCase().trim();
    this.usuariosFiltrados = this.usuarios.filter((usuario) => {
      return usuario.nombre.toLowerCase().includes(valor);
    });
  }
}
