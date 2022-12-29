import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from 'src/app/auth/models/student';
import { environment } from 'src/environments/environment';

const API = environment.baseApiUrl;

@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {

  constructor(private http: HttpClient) { }

  public signUpNewStudent(newStudent: Student): Observable<any> {
    return this.http.post(`${API}/public/register-student`, newStudent);
  }

  public verifyLoginUsage(login: string): Observable<any> {
    return this.http.get(`${API}/public/verify-login-usage/${login}`);
  }

}
