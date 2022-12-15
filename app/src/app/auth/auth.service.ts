import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './models/user';
import { tap } from 'rxjs/operators';
import { UserService } from './user/user.service';
import { environment } from 'src/environments/environment';

const API = environment.baseApiUrl;

interface bodyToken {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient: HttpClient,
    private userService: UserService
  ) { }


  public auth(user: User): Observable< HttpResponse<any> > {
    return this.httpClient.post(`${API}/login`, user, {observe: 'response'})
      .pipe(
        tap( (res) => {
          const responseBody = res.body as bodyToken;
          this.userService.saveTokenAndDecodeUser(responseBody.token ?? '');
        })
      )
  }

}
