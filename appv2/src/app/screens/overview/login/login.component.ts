import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      user: ['', Validators.compose([
        Validators.required,
        Validators.min(4)
      ])],
      password: ['', Validators.compose([
        Validators.required,
        Validators.min(4)
      ])]
    });
  }

  login() :void {
    this.router.navigate(['/overview']); //Todo: change redirect
  }

}
