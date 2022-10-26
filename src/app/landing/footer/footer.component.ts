import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public handlerClickRules(item: string): void {
    switch (item) {
      case 'privacy':
        console.log('privacy');
        break;
      case 'terms':
        console.log('terms');
        break;
      case 'cookie':
        console.log('cookie');
        break;
    }
  }
}
