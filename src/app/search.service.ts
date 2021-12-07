import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Anchor {
  id: string,
  keywords: Array<string>
}
export interface Page {
  title: string,
  path: string,
  anchors: Array<Anchor>
}
export interface SearchData {
  dictionary?: Array<string>,
  pages: Array<Page>
}

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) {
  }

  public getJSON(): Observable<SearchData> {
    return this.http.get<SearchData>("./assets/search-data.json");
  }
}
