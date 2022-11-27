import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TokenService } from '../token/token.service';
import jwt_decode from "jwt-decode";
import { User } from '../models/user';

interface tokenObject {
  sub: string,
  exp: number
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<User>({});

  constructor(
    private tokenService: TokenService
  ) {
    if (this.tokenService.hasToken()) {
      this.decodeJWT();
    }
  }

  private decodeJWT(): void {
    const token = this.tokenService.getToken();
    const result = jwt_decode(token) as tokenObject;
    this.userSubject.next({login: result.sub});
  }

  public getObservableUser(): Observable<User> {
    return this.userSubject.asObservable();
  }

  public logout(): void {
    this.tokenService.deleteToken();
    this.userSubject.next({});
  }

  public saveToken(token: string): void {
    this.tokenService.saveToken(token);
    this.decodeJWT();
  }

}
