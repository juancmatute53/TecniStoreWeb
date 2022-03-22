import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultPost  =[];
    for (const post of value){
      if( (post.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1) || (post.descripcion.toLowerCase().indexOf(arg.toLowerCase())> -1 )
      ){
        resultPost.push(post);
        console.log('si')
      };

    };
    return resultPost;
  }


}

/*
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
 */
