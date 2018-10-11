import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }
  getMovies(title: string) {
return fetch('http://www.omdbapi.com/?s=' + title + '&apikey=ab2c3095')
.then(response => response.json ());
  }
}
