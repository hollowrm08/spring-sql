import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Topics } from '../models/topics';

const API = environment.baseApiUrl;

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public listTopics(): Observable<Topics> {
    return this.httpClient.get<Topics>(`${API}/topic/list`);
  }

}
