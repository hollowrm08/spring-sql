import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './models/user';
import { tap } from 'rxjs/operators';
import { TokenService } from './token/token.service';
import { UserService } from './user/user.service';

interface bodyToken {
  token: string;
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private urlLogin = 'http://localhost:8888/login';

  constructor(
    private httpClient: HttpClient,
    private userService: UserService
  ) { }


  public auth(user: User): Observable< HttpResponse<any> > {
    return this.httpClient.post(this.urlLogin, user, {observe: 'response'})
      .pipe(
        tap( (res) => {
          const responseBody = res.body as bodyToken;
          this.userService.saveToken(responseBody.token ?? '');
        })
      )
  }

}
