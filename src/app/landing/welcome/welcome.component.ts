import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.sass']
})
export class WelcomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public openMap(): void {
    console.log('redirect to map');
    // this.router.navigate(['map']);
  }

}
