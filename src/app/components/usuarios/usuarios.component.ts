import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../interface/usuario';
import { UsuariosService } from '../../services/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  standalone: false,
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css',
})
export class UsuariosComponent implements OnInit {
  usuarios: Usuario[] = [];
  private _router;

  constructor(
    router: Router,
    private usuarioService: UsuariosService,
  ) {
    this._router = router;
  }

  ngOnInit(): void {
    this.usuarioService.fetchUsers().then((usuarios) => {
      this.usuarios = usuarios;
    });
  }

  onSelectUser(id: string) {
    console.log(id)
    this._router.navigate(['/usuario', id]);
  }
}
