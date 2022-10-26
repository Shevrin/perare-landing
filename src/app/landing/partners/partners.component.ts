import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.sass']
})
export class PartnersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

//анимация счетчика
// const counter = () => {
// const time = 3000;
//   const step = 10;

//   let partnersCounter = document.querySelector(".partners__counter");
//   let clientHeight = document.body.offsetHeight;

//   function upNum(num, count) {
//     let n = 1000;
//     let t = Math.round(time / (num / step));
//     let interval = setInterval(() => {
//       n = n + step;
//       if (n == num) {
//         clearInterval(interval);
//       }
//       count.innerHTML = n + "+";
//     }, t);
//   }

//   window.addEventListener("scroll", () => {
//     if (partnersCounter.offsetTop - clientHeight <= window.scrollY) {
//       upNum(3000, partnersCounter);
//       window.scrollY = null;
//     }
//   });
// };
//
