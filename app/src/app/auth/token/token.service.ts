import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private KEY = 'TOKEN';

  public getToken(): string {
    return localStorage.getItem(this.KEY) ?? '';
  }

  public saveToken(token: string): void {
    localStorage.setItem(this.KEY, token);
  }

  public deleteToken(): void {
    localStorage.removeItem(this.KEY);
  }

  public hasToken(): boolean {
    return !!this.getToken();
  }

}
