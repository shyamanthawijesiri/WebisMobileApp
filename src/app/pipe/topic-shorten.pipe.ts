import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'topicShorten'
})
export class TopicShortenPipe implements PipeTransform {

  transform(value: any): any {
    if(value.length <= 45){
      return value;
    }
    return value.substr(0, 40) + '...';
  }
  

}
