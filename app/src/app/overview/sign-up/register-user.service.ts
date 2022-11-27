import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from 'src/app/auth/models/student';

@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {

  //Todo: refactor
  private urlSignUpStudentUrl = 'http://localhost:8888/public/register-student';

  constructor(private http: HttpClient) { }

  public signUpNewStudent(newStudent: Student): Observable<any> {
    return this.http.post(this.urlSignUpStudentUrl, newStudent);
  }

}
