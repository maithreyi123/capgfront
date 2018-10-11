import { Component, OnInit } from '@angular/core';
import { CardService } from '../card.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
public movieList = [];
  constructor(private movieDetails: CardService) { }

  ngOnInit() {

  this.movieDetails.getWhishList().subscribe(fullList => this.movieList = fullList);
 }
}
