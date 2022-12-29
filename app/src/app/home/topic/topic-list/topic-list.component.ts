import { Component, Input, OnInit } from '@angular/core';
import { Topics } from '../../models/topics';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.scss']
})
export class TopicListComponent implements OnInit {

  @Input() topics!: Topics;

  constructor() { }

  ngOnInit(): void {
  }

}
