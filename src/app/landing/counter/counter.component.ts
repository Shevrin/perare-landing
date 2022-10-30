import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, HostListener, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { interval, map, endWith, takeWhile, finalize } from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.sass']
})
export class CounterComponent implements OnInit, OnDestroy {
  @Input() public startValue: number = 1000;
  @Input() public endValue: number = 3000;
  @Input() public step: number = 100;
  @Input() public stepInterval?: number = 3;
  @Input() public suffix: string = '+';


  public el: HTMLElement = this.element.nativeElement;
  public elOffsetTop = this.el.offsetTop;

  public startCounter: boolean = false;
  public showSuffix: boolean = false;

  public counter = interval(1000)
    .pipe(
      map(value => value * this.step + this.startValue),
      // map(value => value * this.step * Math.floor(Math.random() * this.stepInterval) + this.startValue),
      endWith(this.endValue),
      takeWhile(value => value <= this.endValue),
      finalize(() => this.showSuffix = true)
    );

  @HostListener('window:scroll', ['$event']) private onScroll($event: Event): void {
    if (window.pageYOffset - this.elOffsetTop <= window.innerHeight / 1) {
      this.startCounter = true;
    }
  }

  constructor(private element: ElementRef, private renderer: Renderer2, private scroller: ViewportScroller) {

  }

  ngOnInit(): void {
    // fromEvent(this.element.nativeElement,'scroll').subscribe((e: any) => {
    //   console.log(e.target)});
    // let elOffsetTop = this.el.offsetTop;
      if (window.pageYOffset - this.elOffsetTop <= window.innerHeight / 1) {
      this.startCounter = true;
    }
  }

  ngOnDestroy(): void {
  }

}




