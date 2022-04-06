import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'factura'
})
export class FacturaPipe implements PipeTransform {

  transform(value: any, args: any): any {
    const resultPost = [];
    for(const post of value){
      if (
        (post.cliente.toLowerCase().indexOf(args.toLowerCase()) > -1) ||
        (post.cedula.toLowerCase().indexOf(args.toLowerCase()) > -1) ||
        (post.direccion.toLowerCase().indexOf(args.toLowerCase()) > -1) ||
        (post.correo.toLowerCase().indexOf(args.toLowerCase()) > -1)||
        (post.fecha.toLowerCase().indexOf(args.toLowerCase()) > -1) ||
        (post.telefono.toLowerCase().indexOf(args.toLowerCase()) > -1)

      ) {
        resultPost.push(post);
      }
    }

    return resultPost;
  }
}
