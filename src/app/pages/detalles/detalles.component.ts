import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';
import { Usuario } from '../../interface/usuario';

@Component({
  selector: 'app-detalles',
  standalone: false,
  templateUrl: './detalles.component.html',
  styleUrl: './detalles.component.css',
})
export class DetallesComponent implements OnInit {
  id: string = '';
  _route: ActivatedRoute;
  usuario: Usuario = {
    id: this.id,
    nombre: '',
    apellido: '',
    email: '',
    avatar: '',
  };

  constructor(
    private route: ActivatedRoute,
    private usuariosService: UsuariosService,
  ) {
    this._route = route;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.usuariosService.fetchUserByid(this.id).then((usuario) => {
      this.usuario = usuario;
    });
  }

  submitUser() {
    if (this.id === 'nuevo') {
      this.usuariosService.createUser(this.usuario).then((data) => {
        alert('Creado usuario!');
        window.location.href = '/home';
      });
    } else {
      this.usuariosService
        .updateUser(this.usuario.id, this.usuario)
        .then((data) => {
          alert('Se ha actualizado el usuario!');
          window.location.href = '/home';
        });
    }
  }

  deleteUser() {
    this.usuariosService.deleteUser(this.usuario.id).then((data) => {
      alert('Usuario eliminado!');
      window.location.href = '/home';
    });
  }
}
