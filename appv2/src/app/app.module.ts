import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverviewComponent } from './screens/overview/overview.component';
import { HeaderComponent } from './components/header/header.component';
import { FieldAlertComponent } from './components/field-alert/field-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    HeaderComponent,
    FieldAlertComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
