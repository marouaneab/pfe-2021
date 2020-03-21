import { Pipe, PipeTransform } from '@angular/core';
import {Member} from '../interfaces/Member';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(value: Member[], filterBy: string, searchWord): Member[] {
    return value.filter(member => {
      return member.classification === filterBy.toLowerCase();
    }).filter(member => {
      return searchWord === '' || member.firstName.toUpperCase().includes(searchWord) || member.lastName.toUpperCase().includes(searchWord);
    });
  }
}
