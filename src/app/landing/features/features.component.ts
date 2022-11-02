import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterContentChecked, AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { BehaviorSubject, fromEvent, map, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.sass'],

})
export class FeaturesComponent implements OnInit, OnDestroy {

  private positionSubs!: Subscription;
  private positionTarget: BehaviorSubject<number> = new BehaviorSubject(1);

  public getPosition(): Observable<number> {
    return this.positionTarget.asObservable()
  }

  public mark: boolean = true;

  @ViewChild('scrollElement', { static: true }) private scrollElement!: ElementRef;
  @ViewChild('two', { static: true }) private elem!: ElementRef;
  @ViewChildren('boxItem', { read: true }) private featuresBLock!: QueryList<ElementRef>;

  @HostListener('window:scroll', ['$event']) private onScroll($event: Event): void {
    let posTop = this.elem.nativeElement.getBoundingClientRect().top;
    let clientHalfHeight = this.elem.nativeElement.clientHeight / 2;
    if (window.innerWidth > 850) {


    if (posTop + clientHalfHeight <= window.innerHeight && posTop >= 0) {
      if (this.mark == true) {
        // this.renderer.addClass(this.featuresBLock[1], 'features__box-item--visible');
        // this.renderer.removeClass(this.featuresBLock[0], 'features__box-item--visible');

        this.mark = false;
      }
    } else if (posTop < 0) {
      this.mark = false;
    } else {
      if (this.mark == false) {
        // this.renderer.addClass(this.featuresBLock[0], 'features__box-item--visible');
        // this.renderer.removeClass(this.featuresBLock[1], 'features__box-item--visible');
        this.mark = true;
      }
    }
     }
  }


  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    // console.log(`this.featuresBLock`, this.featuresBLock);
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

  ngOnDestroy(): void {
    this.positionSubs.unsubscribe();
  }

  // private getYPosition(e: any): number {
  //   return (e.target as Element).scrollTop;
  // }
}


//Анимация скролла
// const scrollAnimation = () => {
//   let mark = true;
//   const elem = document.getElementById("two");
//   const featuresBLock = document.querySelectorAll(".features__box-item");

//   document.addEventListener("scroll", onScroll);

//   function onScroll() {
//     const posTop = elem.getBoundingClientRect().top;

//     if (posTop + elem.clientHeight / 2 <= window.innerHeight && posTop >= 0) {
//       if (mark == true) {
//         featuresBLock[0].classList.remove("features__box-item--visible");
//         featuresBLock[1].classList.add("features__box-item--visible");
//         mark = false;
//       }
//     } else if (posTop < 0) {
//       mark = false;
//     } else {
//       if (mark == false) {
//         featuresBLock[0].classList.add("features__box-item--visible");
//         featuresBLock[1].classList.remove("features__box-item--visible");
//         mark = true;
//       }
//     }
//   }

//   if(screen.width < 850) {
//     document.removeEventListener("scroll", onScroll);
//   }
// };
//


//счётчик для 12.000.000+
// const counterOne = () => {
  // const time = 3000;
  // const step = 10000;
  // let marker = true;

  // let featuresCounter = document.getElementById(".count-1");
  // let clientHeight = document.body.offsetHeight;

  // function upNum(num, count) {
  //   let n = 11000000;
  //   let t = Math.round(time / (num / step));
  //   let interval = setInterval(() => {
  //     n = n + step;
  //     if (n >= num) {
  //       clearInterval(interval);
  //     }
  //     count.innerHTML = n + "+";
  //   }, t);
  // }

  // window.addEventListener("scroll", () => {
  //   if (featuresCounter.offsetTop - clientHeight <= window.scrollY) {
        // if(marker) {
        //   upNum(12000000, featuresCounter);
        //   marker = false;
        // }
  //   }
  // });
// };

//счётчик для 100М+
// const counterOne = () => {
  // const time = 3000;
  // const step = 1;
  // let marker = true;

  // let featuresCounter = document.getElementById(".count-2");
  // let clientHeight = document.body.offsetHeight;

  // function upNum(num, count) {
  //   let n = 1;
  //   let t = Math.round(time / (num / step));
  //   let interval = setInterval(() => {
  //     n = n + step;
  //     if (n >= num) {
  //       clearInterval(interval);
  //     }
  //     count.innerHTML = n;
  //   }, t);
  // }

  // window.addEventListener("scroll", () => {
  //   if (featuresCounter.offsetTop - clientHeight <= window.scrollY) {
  //      if (marker) {
  //        upNum(100, partnersCounter);
  //        marker = false;
  //      }
  //   }
  // });
// };
