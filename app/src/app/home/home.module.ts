import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TopicListComponent } from './topic/topic-list/topic-list.component';
import { CardModule } from '../components/card/card.module';


@NgModule({
  declarations: [
    HomeComponent,
    TopicListComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CardModule
  ]
})
export class HomeModule { }
