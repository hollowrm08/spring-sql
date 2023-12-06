import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldAlertComponent } from './field-alert/field-alert.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    FieldAlertComponent,
    HeaderComponent,
  ],
  exports: [
    FieldAlertComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class ComponentsModule { }
