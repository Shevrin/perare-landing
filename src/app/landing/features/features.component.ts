import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.sass']
})
export class FeaturesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

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
