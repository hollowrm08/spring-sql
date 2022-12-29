import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Topics } from './models/topics';
import { TopicService } from './topic/topic.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  topics$ !: Observable<Topics>;

  constructor(
    private topicService: TopicService
  ) { }

  ngOnInit(): void {
    this.topics$ = this.topicService.listTopics();
  }

}
