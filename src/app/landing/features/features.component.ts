import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, fromEvent, map, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.sass'],
  
})
export class FeaturesComponent implements OnInit, AfterViewInit, OnDestroy {

  private positionSubs!: Subscription;
  private positionTarget: BehaviorSubject<number> = new BehaviorSubject(1);

  public getPosition(): Observable<number> {
    return this.positionTarget.asObservable()
  }


  @ViewChild('scrollElement', { static: true }) private scrollElement!: ElementRef;

  constructor() { }

  ngOnInit(): void {
    // fromEvent(this.scrollElement.nativeElement, 'scroll').subscribe((e: Event) => console.log({ scrollPosition: e.target['scrollTop'] }));
    this.positionSubs = fromEvent(this.scrollElement.nativeElement, 'scroll')
      .pipe(
        map((e: any) => (e.target as Element).scrollTop)
      )
      .subscribe((position: number) => {
        if (position) {
        console.log(`position`, position);
        this.positionTarget.next(position);
        }
      })
  }

  ngAfterViewInit(): void {
  }

  ngOnDestroy(): void {
    this.positionSubs.unsubscribe();
  }

  // private getYPosition(e: any): number {
  //   return (e.target as Element).scrollTop;
  // }
}
//счётчик для 12.000.000+
// const counterOne = () => {
  // const time = 3000;
  // const step = 10000;

  // let featuresCounter = document.getElementById(".count-1");
  // let clientHeight = document.body.offsetHeight;

  // function upNum(num, count) {
  //   let n = 11000000;
  //   let t = Math.round(time / (num / step));
  //   let interval = setInterval(() => {
  //     n = n + step;
  //     if (n == num) {
  //       clearInterval(interval);
  //     }
  //     count.innerHTML = n + "+";
  //   }, t);
  // }

  // window.addEventListener("scroll", () => {
  //   if (featuresCounter.offsetTop - clientHeight <= window.scrollY) {
  //     upNum(3000, featuresCounter);
  //     window.scrollY = null;
  //   }
  // });
// };

//счётчик для 100М+
// const counterOne = () => {
  // const time = 3000;
  // const step = 1;

  // let featuresCounter = document.getElementById(".count-2");
  // let clientHeight = document.body.offsetHeight;

  // function upNum(num, count) {
  //   let n = 1;
  //   let t = Math.round(time / (num / step));
  //   let interval = setInterval(() => {
  //     n = n + step;
  //     if (n == num) {
  //       clearInterval(interval);
  //     }
  //     count.innerHTML = n;
  //   }, t);
  // }

  // window.addEventListener("scroll", () => {
  //   if (featuresCounter.offsetTop - clientHeight <= window.scrollY) {
  //     upNum(100, featuresCounter);
  //     window.scrollY = null;
  //   }
  // });
// };
