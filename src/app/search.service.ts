import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Anchor {
  title: string,
  path: string,
  fragment?: string,
  keywords: Array<string>
}
export interface SearchData {
  dictionary?: Array<string>,
  anchors: Array<Anchor>
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
