import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(allProducts:[],searchKey:string,propname:string): any[] {
    if(!allProducts || searchKey=="" || propname==""){
      return allProducts;
    }
      const result:any=[]//new array
    allProducts.forEach((product:any)=>{
      if(product[propname].trim().toLowerCase().includes(searchKey.toLowerCase())){
        result.push(product)
      }
    })
    return result;
  }
}
