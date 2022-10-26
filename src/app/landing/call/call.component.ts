import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-call',
  templateUrl: './call.component.html',
  styleUrls: ['./call.component.sass']
})
export class CallComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  public openMap(): void {
    console.log('redirect to map')
    // this.router.navigate(['map'])
  }
}
