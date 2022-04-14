import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(productSearch , searchItem) {
    if(!productSearch || !searchItem) {
      return productSearch
  }

  return productSearch.filter((emp)=> {
    return emp.productName.toLowerCase().indexOf(searchItem.toLowerCase()) !== -1
  })

  }
}

