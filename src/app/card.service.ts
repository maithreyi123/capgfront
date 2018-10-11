import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieDetails } from './movie';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CardService {
 private url = 'http://localhost:8070/api/v1';
  movies = new MovieDetails();
 constructor(private http: HttpClient) { }

 getWhishList(): Observable<MovieDetails[]> {
return this.http.get<MovieDetails[]>(this.url + '/movies');
}
deleteWishList(movieId) {
    console.log(this.url + '/movie/' + movieId);
       return this.http.delete(this.url + '/delete/movie/' + movieId).pipe(
         map((response1: Response) => {
           return response1.json();
         })
       );
     }
 addToWishList(movie) {
      this.movies.movieId = Math.random() * 50 + 1;
       this.movies.movieTitle = movie.Title;
        this.movies.moviePoster = movie.Poster;
        this.movies.movieYor = movie.Year;
        return this.http.post<MovieDetails>(this.url + '/save/movie/', this.movies);
}
}
