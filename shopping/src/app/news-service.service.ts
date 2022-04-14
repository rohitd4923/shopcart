import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {
  news: any;
  onRequest(value){
    this.news=value;
  }
  constructor(private http: HttpClient) { }
  getNews(){
    return this.http.get<any>(`https://newsapi.org/v2/everything?q=${this.news}&from=2021-11-19&sortBy=publishedAt&apiKey=386a18e7cdd94dca829fa34d9c65d64a`)
  }
}
