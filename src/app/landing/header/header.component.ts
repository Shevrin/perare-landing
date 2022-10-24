import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  public isShowNews: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  public openMap(): void {

  }

  public closeShowNews(): void {
    this.isShowNews = false;
  }


}
