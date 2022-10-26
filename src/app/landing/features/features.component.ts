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
//счётчик 
// const counterOne = () => {
//   let counts;
//   let upto = 72000000;
//   let offSetTop = document.querySelector(".features__info-box-count");
//   let clientHeight = document.body.offsetHeight;

//   function updated() {
//     let count = document.querySelector(".features__info-box-count");
//     count.textContent = ++upto + "+";
//     if (upto === 82000000) {
//       clearInterval(counts);
//       count.textContent = "82,000,000+";
//     }
//   }

//   if (offSetTop.offsetTop - clientHeight <= window.scrollY) {
//     counts = setInterval(updated, 1);
//   }
// };

// const counterTwo = () => {
//   let counts;
//   let upto = 1;
//   let offSetTop = document.querySelector(".features__info-box-count");
//   let clientHeight = document.body.offsetHeight;

//   function updated() {
//     let count = document.querySelector(".features__info-box-count");
//     count.textContent = ++upto + "M+";
//     if (upto === 100) {
//       clearInterval(counts);
//       count.textContent = "100M+";
//     }
//   }

//   if (offSetTop.offsetTop - clientHeight <= window.scrollY) {
//     counts = setInterval(updated, 1);
//   }
// };
