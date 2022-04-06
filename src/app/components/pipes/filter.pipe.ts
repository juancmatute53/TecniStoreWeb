import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args: any): any {
    const resultPost = [];
    for(const post of value){
      if (
        (post.nombre.toLowerCase().indexOf(args.toLowerCase()) > -1) ||
        (post.categoria.toLowerCase().indexOf(args.toLowerCase()) > -1) ||
        (post.descripcion.toLowerCase().indexOf(args.toLowerCase()) > -1) ||
        (post.precio.toLowerCase().indexOf(args.toLowerCase()) > -1)||
        (post.stock.toLowerCase().indexOf(args.toLowerCase()) > -1)

      ) {
        resultPost.push(post);
      }
    }

    return resultPost;
  }


}
