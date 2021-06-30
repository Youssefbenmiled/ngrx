import { Injectable } from '@angular/core';
import{ajax}from 'rxjs/ajax';

import { from, Observable, throwError,fromEvent,  of, interval, merge } from 'rxjs';
import { map,catchError, pluck, scan, throttleTime, first, filter, max, min, take, retry, } from 'rxjs/operators';
import { IApi } from './try.service';

@Injectable({
  providedIn: 'root'
})
export class OperatorsService {

  constructor() { }

  ofOperator(){
    of<number>(1,2,3)
      .pipe(
        map(value=>value*2),
        filter(value=>value>2)
      ).subscribe(function(v){
        console.log(v)
      })

      of<number>(15,45,12)
      .pipe(
        first()
      ).subscribe(function(v){
        console.log(v)
      })

      fromEvent(document,'click').subscribe(event=>console.log(event))
  }

  maxMinOperators(){
    const observable=of<Person>(
      {age:7,name:'A'},
      {age:5,name:'B'},
      {age:9,name:'C'}
      )
      .pipe(
        min<Person>(function(a:Person,b:Person){return a.age<b.age?-1:1})//max or min
      )

      observable.subscribe(function(person:Person){
        console.log(`${person.name}`)
      })

  }
  mergeOperator(){
    const observable1=fromEvent(document,'click')
    const observable2=interval(1000).pipe(take(10))

   const result=merge(observable1,observable2)
    result.subscribe(function(values){
      console.log(values)
    })
  }

  pluckOperator(){
    const clicks = fromEvent(document, 'click');
    const tagNames = clicks.pipe(

      pluck('clientX','clientY'),
      map(ev=>console.log(ev)),
      );
    tagNames.subscribe();
  }
  handleOf(){
   const nums=of(1,2,5,6,38)
   const obs=nums.pipe(
    filter((n: number) => n % 2 !== 0),
    map(value=>value*value)
   )
   obs.subscribe(values=>console.log(values))
   }


   handleApi(){

    const apiData = ajax('https://jsonplaceholder.typicode.com/todos')
    .pipe(
      map((res: any) => {
        if (!res.response) {
          throw new Error('Value expected!');
        }
        return res.response;
      }),
      retry(3),
      catchError((error) => throwError(error))
      // catchError(() => of([]))
    );
    apiData.subscribe({
      next(x: IApi[]) { console.log('data: ', x); },
      error() { console.log('errors already caught... will not run'); }
    })
   }

   fromEventPluck(){
     const observable=fromEvent(document,'click').pipe(
       throttleTime(1000),
       pluck('clientX')
     ).subscribe(function(event){
       console.log(event)
     })
   }

}


interface Person{
  // id:number
  age:number
  name:string
}
