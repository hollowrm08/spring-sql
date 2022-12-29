import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { first, map, switchMap } from 'rxjs/operators';
import { RegisterUserService } from './register-user.service';

@Injectable({
  providedIn: 'root'
})
export class VerifyUserFieldsService {

  constructor(private registerUserService: RegisterUserService) { }

  public verifyLoginUsage(): any {
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        switchMap((login) => {
          return this.registerUserService.verifyLoginUsage(login);
        }),
        map((response) => {
          return response.unavailable ? {unavailable: true} : null;
        }),
        first()
      )
    };
  }
}
