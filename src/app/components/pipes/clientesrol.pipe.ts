import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'clientesrol'
})
export class ClientesrolPipe implements PipeTransform {

  transform(value: any, args: any): any {
    const resultPost = [];
    for (const post of value) {
      if (
        (post.apellido.toLowerCase().indexOf(args.toLowerCase()) > -1) ||
        (post.cedula.toLowerCase().indexOf(args.toLowerCase()) > -1) ||
        (post.clave.toLowerCase().indexOf(args.toLowerCase()) > -1) ||
        (post.correo.toLowerCase().indexOf(args.toLowerCase()) > -1) ||
        (post.direccion.toLowerCase().indexOf(args.toLowerCase()) > -1) ||
        (post.nombre.toLowerCase().indexOf(args.toLowerCase()) > -1) ||
        (post.telefono.toLowerCase().indexOf(args.toLowerCase()) > -1) ||
        (post.usuario.toLowerCase().indexOf(args.toLowerCase()) > -1)

      ) {
        resultPost.push(post);
      }
    }

    return resultPost;
  }
}
