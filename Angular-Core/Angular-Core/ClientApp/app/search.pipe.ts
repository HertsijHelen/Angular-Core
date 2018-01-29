import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'SearchPipe'
})
export class SearchPipe implements PipeTransform {
    transform(value: any, search: string) {
        
        if (search) {
            search = search.toLowerCase();
            console.log(search);
            
            return value.filter(function (el: any) {
                
                return el.company.toLowerCase().indexOf(search) > -1;
                
            }) 
           
            }
        console.log(value);
        return value;
    }

}