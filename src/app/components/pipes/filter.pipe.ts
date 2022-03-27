import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args: any): any {
    const resultPost = [];
    for(const post of value){
      if ((post.nombre.toLowerCase().indexOf(args.toLowerCase()) > -1)
      ) {
        resultPost.push(post);
      }
    }

    return resultPost;
  }


}

/*
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

  || (post.descripcion.toLowerCase().indexOf(args.toLowerCase()) > -1)

if ((post.nombre.toLowerCase().indexOf(args.toLowerCase()) > -1)
      ) {

      }

for (const post of value) {
      switch (post){
        case (nombre.toLowerCase().indexOf(args.toLowerCase())>-1):
          resultPost.push(post);
          break;
        case (post.descripcion.toLowerCase().indexOf(args.toLowerCase())>-1):
          resultPost.push(post);
          break;
      }

    }
    ;

 */
