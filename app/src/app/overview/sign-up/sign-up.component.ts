import { DatePipe, formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from 'src/app/auth/models/student';
import { RegisterUserService } from './register-user.service';
import { VerifyUserFieldsService } from './verify-user-fields.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  typeUser = "S";
  newUserForm!: FormGroup;
  datepipe: DatePipe = new DatePipe('en-US');

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private registerUserService: RegisterUserService,
    private verifyUserFieldsSevice: VerifyUserFieldsService
  ) { }

  //Todo: Implementar logica de demais campos
  public ngOnInit(): void {
    this.newUserForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email] ],
      login: ['', [Validators.required], [this.verifyUserFieldsSevice.verifyLoginUsage()]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      birthday: ['', Validators.required],
      enrollment: ['', [Validators.required]]
    });
  }

  public signUp(): void {
    //Todo: refactor for teacher
    if (this.newUserForm.valid) {
      const newUser = this.newUserForm.getRawValue() as Student;
      newUser.birthday = formatDate(newUser.birthday, 'yyyy/MM/dd', 'en-US');
      this.registerUserService.signUpNewStudent(newUser).subscribe(() => {
        this.router.navigate(['/overview/login']);
      }, (error) => {
        console.log(`Erro ao registar estudante: ${error}`);
        console.log(error);
      });
    }
  }

}
