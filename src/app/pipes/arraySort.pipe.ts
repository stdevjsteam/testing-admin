import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: "sort"
})
export class ArraySortPipe implements PipeTransform {
  transform(array: any, field: string): any[] {
    if (!Array.isArray(array)) {
      return;
    }
    array.sort((a: any, b: any) => {
      if (a.testResult.hasOwnProperty(field)) {
        if (typeof a.testResult[field] === 'string') {
          return this.sortDesc(a, b, 'testResult', field);
        } else {
          return this.sortAsc(a, b, 'testResult', field);
        }
      } else {
        if (typeof a.user[field] === 'string') {
          return this.sortDesc(a, b, 'user', field);
        } else {
          return this.sortAsc(a, b, 'user', field);
        }
      }
    });
    return array;
  }

  sortDesc = (a, b, type, field) => {
    if (a[type][field] > b[type][field]) {
      return 1;
    } else if (a[type][field] < b[type][field]) {
      return -1;
    } else {
      return 0;
    }
  };

  sortAsc = (a, b, type, field) => {
    if (a[type][field] > b[type][field]) {
      return -1;
    } else if (a[type][field] < b[type][field]) {
      return 1;
    } else {
      return 0;
    }
  }
}
