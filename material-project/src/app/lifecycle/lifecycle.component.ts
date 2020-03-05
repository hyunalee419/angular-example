import {
  Component, OnChanges, DoCheck, OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html'
})
export class LifeCycleComponent
  implements OnChanges, DoCheck, OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  constructor() {
    console.log('1-컴포넌트 : constructor()');
  }

  ngOnChanges() {
    // Declaring ngDoCheck and ngOnChanges method in a class is not recommended
    // (no-conflicting-lifecycle)
    console.log('2--컴포넌트 : ngOnChanges()');
  }

  ngOnInit() {
    console.log('3---컴포넌트 : ngOnInit()');
  }

  ngDoCheck() {
    // Declaring ngDoCheck and ngOnChanges method in a class is not recommended
    // (no-conflicting-lifecycle)
    console.log('4----컴포넌트 : ngDoCheck()');
  }

  ngAfterContentInit() {
    console.log('5-----컴포넌트 : ngAfterContentInit()');
  }

  ngAfterContentChecked() {
    console.log('6------컴포넌트 : ngAfterContentChecked()');
  }

  ngAfterViewInit() {
    // viewChild is set after the view has been initialized
    console.log('7-------컴포넌트 : ngAfterViewInit()');
  }

  ngAfterViewChecked() {
    // viewChild is updated after the view has been checked
    console.log('8--------컴포넌트 : ngAfterViewChecked()');
  }

  ngOnDestroy() {
    // 컴포넌트가 제거될 때 호출됨
    console.log('9---------컴포넌트 : ngOnDestroy()');
  }
}
