import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  toHomePage() :void {
    this.router.navigate(['overview']);
  }

  toLoginPage() :void {
    this.router.navigate(['overview/login']);
  }

}
