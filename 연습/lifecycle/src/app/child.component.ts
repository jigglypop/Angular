import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChange } from '@angular/core'

@Component({
  selector : 'app-child',
  template : `
    <p> child component </p>
    <p> 부모 컴포넌트가 전달한 값 : {{ prop }} </p>
  `
})

export class ChildComponent implements OnChanges, OnInit, DoCheck,
AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{
  @Input() prop : string
  constructor(){
    console.log('[constructor]')
    console.log(`prop: ${this.prop}`)
    this.prop = 'TEST'
    console.log(`prop: ${this.prop}`)
  }
  ngOnChanges() {
    console.log('[OnChanges]')
    console.log(`prop: ${this.prop}`)
    console.log('changes:')
  }
  ngOnInit(){
    console.log('[OnInit]')
  }
  ngDoCheck(){
    console.log('[DoCheck]')
  }
  ngAfterContentInit(){
    console.log('[ngAfterContentInit]')
  }
  ngAfterContentChecked(){
    console.log('[ngAfterContentChecked]')
  }
  ngAfterViewInit(){
    console.log('[ngAfterViewInit]')
  }
  ngAfterViewChecked(){
    console.log('[ngAfterViewChecke]')
  }
  ngOnDestroy(){
    console.log('[ngOnDestroy]')
  }
}
