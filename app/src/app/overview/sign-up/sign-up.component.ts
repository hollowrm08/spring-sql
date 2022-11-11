import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from 'src/app/auth/models/student';
import { RegisterUserService } from './register-user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  newUserForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private registerUserService: RegisterUserService
  ) { }

  //Todo: Implementar logica de demais campos
  public ngOnInit(): void {
    this.newUserForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email] ],
      login: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      enrollment: ['', [Validators.required]]
    });
  }

  public signUp(): void {
    //Todo: refactor for teacher
    if (this.newUserForm.valid) {
      const newUser = this.newUserForm.getRawValue() as Student;
      newUser.birthday = '09/09/2002';
      newUser.bio = 'Funciona?' //Todo: refactor
      this.registerUserService.signUpNewStudent(newUser).subscribe(() => {
        this.router.navigate(['']);
      }, (error) => {
        console.log(`Erro ao registar estudante: ${error}`);
        console.log(error);
      });
    }
  }

}
