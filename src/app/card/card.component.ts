import { CardService } from './../card.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() movieTitle;
   @Input() movieLists;
 deleteList;
  constructor(private cardService: CardService) { }
  onWorking(movieId) {
    this.cardService.deleteWishList(movieId).subscribe(data => this.deleteList = data);
  return this.deleteList;
    }
     ngOnInit() {
  }

}
