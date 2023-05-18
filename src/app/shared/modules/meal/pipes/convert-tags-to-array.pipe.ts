/* Place your angular imports here */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertTagsToArray'
})
export class ConvertTagsToArrayPipe implements PipeTransform {
  public transform(tags: string | null): string[] {
    if(tags) {
      return tags.split(',').filter((tag: string) => tag);
    }
    return [];
  }
}
