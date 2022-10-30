import { Component, Input, OnInit } from '@angular/core';
import { ITabsIndustries } from '../../interfaces/tabs-industries';

@Component({
  selector: 'app-industries-body-item',
  templateUrl: './industries-body-item.component.html',
  styleUrls: ['./industries-body-item.component.sass']
})
export class IndustriesBodyItemComponent implements OnInit {

  @Input() public tab!: ITabsIndustries;

  constructor() { }

  ngOnInit(): void {
  }

}
