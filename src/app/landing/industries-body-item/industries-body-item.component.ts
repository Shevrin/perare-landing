import { trigger, transition, style, animate, state } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { ITabsIndustries } from '../../interfaces/tabs-industries';

@Component({
  selector: 'app-industries-body-item',
  templateUrl: './industries-body-item.component.html',
  styleUrls: ['./industries-body-item.component.sass'],
  animations: [
    trigger('slideInOut', [
      state('active', style({
        transform: 'translateX(0%)'
      })),
      state('unactive', style({
        transform: 'translateX(-100%)'
      })),
      transition('active => unactive', [
        animate('0.3s ease-in',style({transform: 'translateX(-100%)'}))
      ]),
      transition('unactive => active', [
        animate('0.3s ease-out',style({transform: 'translateX(100%)'}))
      ]),
    ]),
  ]

})
export class IndustriesBodyItemComponent implements OnInit {

  @Input() public tab!: ITabsIndustries;

  constructor() { }

  ngOnInit(): void {
  }

}
