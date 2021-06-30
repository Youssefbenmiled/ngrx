import { Injectable } from '@angular/core';
// import  from "rxjs/Rx";
// import * as Rx from 'rxjs/Rx'

import { from, Observable, throwError,fromEvent, Observer } from 'rxjs';
import { map,catchError, pluck, scan, throttleTime, } from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TryService {

  constructor(private httpClient:HttpClient) { }

getInfo():Observable<IApi[]>{
  return this.httpClient.get<IApi[]>('assets/data.json')
}

getInfo2():Observable<IApi[]>{
  return this.httpClient.get<IApi[]>('https://jsonplaceholder.typicode.com/todos')
  .pipe(
    // pluck('title'),
    map((data: IApi[]) => {
      return data;

    }), catchError( error => {

      return throwError( error);

    })

 )

}


tryObservable(){
  const observable = new Observable(
    function subscribe(subscriber) {
      try {
         subscriber.next("My First Observable");
         subscriber.next("Testing Observable");
         subscriber.complete();
      } catch(e){
         subscriber.error(e);
      }
   }

 );
 observable.subscribe(data=>console.log(data))


}

tryOverView(){

  const observable=new Observable(
    (subscriber)=>{
      subscriber.next(2)
      subscriber.next(3)
    }
  )
  observable.subscribe(x=>console.log(x))


  fromEvent(document,'click').subscribe(event=>console.log(event))

  const observable1=
  fromEvent(document, 'click')
  .pipe(scan(count => count + 1, 0))
  observable1.subscribe(count => console.log(`Clicked ${count} times`));



  const observable2=fromEvent(document,'click')
  .pipe(
    throttleTime(4000),
    scan(count=>count+1,0)
  )
  observable2.subscribe(count => console.log(`Clicked ${count} times`));

  fromEvent(document, 'click')
  .pipe(
    throttleTime(1000),
    map((event:any) => event.clientX),
    scan((count, clientX,index) => count + clientX, 0)
  ).subscribe(v=>console.log(v))

  }





  tryObservables(){
    const observable=new Observable(
      function subscriber(subscriber) {
        subscriber.next(1)
        subscriber.next(2)
        subscriber.next(3)
        setTimeout(() => {
          subscriber.next(4)
          subscriber.error('Error occured')
          subscriber.complete()
        }, 2500);

  }
  )
  observable.subscribe({
    next:function(value){
      console.log(value)
    },complete:function(){
      console.log('Completed')
    },error:function (error:Error) {
      alert(error.message)
      throw new Error(error.name)
    }
  })

  }


    tryFunctionFoo(){
      const foo=new Observable(
        function subscriber(sub){
          console.log('Hello')
          sub.next(42)
        }
      )
      foo.subscribe(x => {
        console.log(x);
      });

    }

    tryFunctionFoo2(){
      const foo=new Observable(
        function(sub){
          console.log('Hello')
          sub.next(42)
          setTimeout(() => {
            sub.next(300); // happens asynchronously
            sub.complete()
          }, 1000);
        }
      )

      foo.subscribe({next:data=>console.log(data),complete:()=>console.log('Completed')});


      const observable = new Observable(function subscribe(subscriber) {
        let i=0
        setInterval(() => {
          subscriber.next(i++)
        }, 1000);
      });

      observable.subscribe({next:data=>console.log(data),complete:()=>console.log('Completed')});
    }


    tryFrom(){

      const observable = from<number[]>([10, 20, 30]);
      const subscription = observable.subscribe(x => console.log(x));
      subscription.unsubscribe()
    }

    tryClearInterval(){
      function subscriber(sub){
        const intervalId=setInterval(function(){
          sub.next(45)
        },1000)
        return function() {
          clearInterval(intervalId);
        };

      }

    const x=subscriber({
        next:function(data){
          console.log(data)
        }
      })

      x()//unsubscribe

    }

    tryEs8(){
      const { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
      console.log(z)
    }



}



export interface IApi{
userId:number;
id:number;
title:string;
completed:boolean
}

