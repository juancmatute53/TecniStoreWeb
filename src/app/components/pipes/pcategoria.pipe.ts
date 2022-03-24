import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pcategoria'
})
export class PcategoriaPipe implements PipeTransform {

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
