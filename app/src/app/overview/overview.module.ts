import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverviewRoutingModule } from './overview-routing.module';
import { OverviewComponent } from './overview.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    OverviewComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    OverviewRoutingModule,
    ReactiveFormsModule
  ]
})
export class OverviewModule { }
