import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/auth/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public user$ = this.userService.getObservableUser();

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  public logout(): void {
    this.userService.logout();
    this.router.navigate(['']);
  }

}
