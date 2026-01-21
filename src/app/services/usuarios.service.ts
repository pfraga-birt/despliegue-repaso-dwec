import { Injectable } from '@angular/core';
import { Usuario } from '../interface/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  api_url = 'https://696d1578f4a79b3151807a5e.mockapi.io/users/users';

  async fetchUsers(): Promise<Usuario[]> {
    try {
      let response = await fetch(this.api_url);
      let data = await response.json();
      let users = data.map((item: any) => {
        return this.convertDataToUser(item);
      });

      return users;
    } catch {
      console.log('Error');
      return [];
    }
  }

  async fetchUserByid(id: string): Promise<Usuario> {
    try {
      let response = await fetch(this.api_url + '/' + id);
      let data = await response.json();
      let user = this.convertDataToUser(data);

      return user;
    } catch (error) {
      console.log('No se encontró el usuario');
      throw error;
    }
  }

  async updateUser(id: string, usuario: Usuario): Promise<void> {
    let parseUser = {
      id: usuario.id,
      email: usuario.email,
      first_name: usuario.nombre,
      last_name: usuario.apellido,
      avatar: usuario.avatar,
    };
    try {
      let response = await fetch(this.api_url + '/' + id, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(parseUser),
      });

      let data = await response.json();

      return data;
    } catch (error) {
      throw error;
    }
  }

  async createUser(usuario: Usuario): Promise<void> {
    let parseUser = {
      email: usuario.email,
      first_name: usuario.nombre,
      last_name: usuario.apellido,
      avatar: usuario.avatar,
    };

    try {
      let response = await fetch(this.api_url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(parseUser),
      });

      let data = await response.json();
      return data;
    } catch (error) {
      console.log('Error en crear el usuario!');
      throw error;
    }
  }

  async deleteUser(id: string): Promise<void> {
    try {
      let response = await fetch(this.api_url + '/' + id, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      let data = await response.json();
      return data;
    } catch (error) {
      console.log('Error al borrar el usuario');
      throw error;
    }
  }

  convertDataToUser(data: any): Usuario {
    return {
      id: data.id,
      email: data.email,
      nombre: data.first_name,
      apellido: data.last_name,
      avatar: data.avatar || 'default.png',
    };
  }
}
