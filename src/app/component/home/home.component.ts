import { Component, OnInit } from '@angular/core';
import { CardService } from '../card/service/card.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cards: any[] = [];

  constructor(private cardService: CardService) {}

  ngOnInit() {
    this.cardService.getCards().subscribe((data: any) => {
      this.cards = data;
    });
  }
}
