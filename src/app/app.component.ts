import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TryService } from './RxJs/try.service';
import { OperatorsService } from './RxJs/operators.service';

import { DecrementAction, IncrementAction } from './store/actions/counter.action';
import {  StoreInterface } from './store/store';
import { MaxService } from './RxJs/max.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  counter:number;

  constructor(
    // private store:Store<StoreInterface>,
    private rxService:TryService,
    private opService:OperatorsService,
    private maxService:MaxService){
    // this.store.subscribe(data=>console.log(data))
  }

  ngOnInit(): void {

    // const y=()=>{return 2546456654564546}
    // console.log(y())

    // this.opService.handleApi()
    // this.maxService.firstMethod()
    // this.maxService.frthMethod()
    // this.maxService.subjectBehaviour()



    // const obj = {
    //   name: 'ali',
    //   age: 20,
    //   walk: () => {
    //     console.log('walked');
    //   },
    //   getInfo(){
    //     console.log("info")
    //   }
    // };
    // obj.getInfo()

    const observer={
      next:function(data){
        console.log(data)
      },
      error:function(error){
        console.log(error)
      },
      complete:function(){
        console.log('compeleted')
      },
    }

    // this.rxService.getInfo().subscribe(
    //   data=>console.log(data),
    //   error=>console.log(error),
    //   ()=>console.log('Completed')
    // )

    // this.rxService.getInfo2().subscribe(
    //  observer
    // )

  }

  inc(){
    // this.store.dispatch(new IncrementAction(1))
  }
  dec(){
    // this.store.dispatch(new DecrementAction(1))
  }

  tryOverView(){
    this.rxService.tryOverView()
  }
  tryObservables(){
    this.rxService.tryEs8()
  }

  ofOpertor(){
    this.opService.ofOperator()
  }

  maxMinOpertor(){
    this.opService.maxMinOperators()
  }

  mergeOperator(){
    this.opService.mergeOperator()
  }

  pluckOperator(){
    this.opService.pluckOperator()
  }

  fromEventFunction(){
    this.opService.fromEventPluck()

  }

  fifthMethod(){
    this.maxService.fifthMethod()
  }
  sithMethod(){
    this.maxService.sithMethod()
  }

  sevthMethod(){
    this.maxService.sevthMethod()
  }
  mergeMapMethod(){
    const input1=document.getElementById('id1')
    const input2=document.getElementById('id2')
    const span=document.querySelector('span')
    this.maxService.mergeMapMethod(input1,input2,function(result){
      span.textContent=result
    })
  }

  switchMap(){
    this.maxService.switchMap()
  }
}
