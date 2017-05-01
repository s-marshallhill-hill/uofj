import { Pipe, PipeTransform } from '@angular/core';
import {Roster} from '../../Rosters/roster.service';
@Pipe({
  name: 'sortBy',
  pure: false
})
export class SortByPipe implements PipeTransform {

  transform(array, args: string): any {
    array.sort((a: any, b: any) => {
	    if ( a[args] < b[args] ){
	    	return -1;
	    }else if( a[args] > b[args] ){
	        return 1;
	    }else{
	    	return 0;	
	    }
    });
    return array;
  }

}
