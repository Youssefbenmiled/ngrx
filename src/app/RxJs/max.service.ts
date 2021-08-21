import { Injectable } from "@angular/core";


import { Subject,from, Observable, throwError,fromEvent, Observer, of, interval, BehaviorSubject } from 'rxjs';
import { map,catchError, pluck, scan, throttleTime, first, filter, max, min, take, retry,
  debounceTime, distinctUntilChanged, reduce, mergeMap, switchMap, } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class MaxService{
  observer={
    next:function(value){
      console.log(value)
    },
    error:function(value){
      console.log(value)
    },
    complete:function(){
      console.log('Completed')
    },
  }
  constructor() {

  }

  fromEventPluck(){
    const observable=fromEvent(document,'click').pipe(
      throttleTime(1000),
      pluck('clientX')
    )

    observable.subscribe(function(event){
      console.log(event)
    })
  }

  firstMethod(){


    const observable =new Observable(
      function(subscriber){
        subscriber.next('A value')
        setInterval(function(){
          subscriber.next('Interval value')

        },1000)
      }
    )
    observable.subscribe(this.observer)
  }

  secMethod(){
    const observable=interval(1000)
    observable.pipe(

      take(10),
      map((value)=> value*5),
      throttleTime(2000)

    ).subscribe(this.observer)
  }
throwMethod(){
  const observable=throwError(new Error('Error occured')).subscribe(value=>console.log(value))
}

subjectMethod(){
  const subject=new Subject()
  subject.subscribe(this.observer)
  subject.next("Next Subject")
  subject.error(new Error('Error occurred'))
}

frthMethod(){
  const observable=interval(500)
  .pipe(
    filter(function(value){
      return value%2===0
    })
  )
 const sub= observable.subscribe(value=>console.log(value))
 setTimeout(() => {

   sub.unsubscribe()
 }, 2000);
  }


  fifthMethod(){
    // from(["t1","t2",0,1]).pipe(
    //   filter(value=>typeof value === "number")
    // ).subscribe(value=>console.log(value))
    const observable=fromEvent(document,'change')
    .pipe(
      map(function(event:any){return event.target.value}),
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe(function(value:string){console.log(value)})
  }


  sithMethod(){
    const observable1=of(1,2,3,4,5)
    .pipe(
      reduce<number>(function(total,currentValue){
        return total+currentValue})

    ).subscribe(this.observer)
    const observable2=of(1,2,3,4,5)
    .pipe(
      scan<number>(function(total,currentValue){
        return total+currentValue})

    ).subscribe(this.observer)
  }


  sevthMethod(){
    const observable=fromEvent(document.getElementById('idInput'),'change')
    .pipe(
      pluck('target','value'),
      debounceTime(1000),
      distinctUntilChanged()
      ).subscribe(function(value:string){console.log(value)})

  }

  mergeMapMethod(input1,input2,cb){
    //----------Method1----------------//
    // let text = of('Welcome To');
    // let case1 = text.pipe(mergeMap((value) => of(value + ' Tutorialspoint!')));
    // case1.subscribe((value) => {console.log(value);});


    //----------Method2----------------//

    const obs1=fromEvent(input1,'input')
    const obs2=fromEvent(input2,'input')

    obs1.pipe(
      mergeMap(function(event1:any){
        return obs2.pipe(
          map((event2:any)=>{
          return event1.target.value+' '+event2.target.value
        })
        )
      })
    ).subscribe(result=>cb(result))



  }
  switchMap(){
    const obs1=fromEvent(document,'click')
    const obs2=interval(1000).pipe(
      map(value=>{return 'Number is : '+value})
    )

      //----------------problem(2 observables same time)----------//


    // obs1.subscribe(event=>obs2.subscribe(value=>console.log(value)))



      //----------------swithcMap solution----------//

    obs1.pipe(
      switchMap(function(event){
        return obs2
      })
    ).subscribe(value=>console.log(value))

  }


subjectBehaviour(){
  const subject=new BehaviorSubject("first Value")
  subject.subscribe(this.observer)
  subject.next('Clicked')
}

}
//npm install --save rxjs-compat
