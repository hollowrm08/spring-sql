import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverviewRoutingModule } from './overview-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    OverviewRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class OverviewModule { }
