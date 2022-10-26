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
//   let counts;
//   let upto = 1000;
//   let offSetTop = document.querySelector(".partners__counter");
//   let clientHeight = document.body.offsetHeight;

//   function updated() {
//     let count = document.querySelector(".partners__counter");
//     count.textContent = ++upto + "+";
//     if (upto === 3000) {
//       clearInterval(counts);
//       count.textContent = "3,000+";
//     }
//   }

//   if (offSetTop.offsetTop - clientHeight <= window.scrollY) {
//     counts = setInterval(updated, 1);
//   }
// };
