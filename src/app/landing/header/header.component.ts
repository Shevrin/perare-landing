import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  public isShowNews: boolean = true;
  public isOpenBurgerMenu: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public openMap(): void {
    console.log('redirect to map')
    // this.router.navigate(['map'])
  }

  public closeShowNews(): void {
    this.isShowNews = false;
  }

  public toggleBurgerMenu(): void {
    this.isOpenBurgerMenu = !this.isOpenBurgerMenu
  }

}

