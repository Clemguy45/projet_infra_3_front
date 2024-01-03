import { Component, OnInit } from '@angular/core';
import { CardService } from './service/card.service';
import { CardImageService } from './service/card-image.service';
import { cloneDeep } from 'lodash';


@Component({
  selector: 'app-card-home',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  cards: any = {};
  displayedCards: any = [];

  constructor(private cardService: CardService, private cardImageService: CardImageService) {}

  ngOnInit() {
    console.log('ngOnInit is called');
    this.cardService.getCards().subscribe(data => {
      this.cards = data;
      console.log("Cards:", this.cards)
      this.shuffleAndDisplayCards();
      console.log("display:", this.displayedCards)
      //this.downloadAndSaveCardImages();
    });
  }

  shuffleAndDisplayCards() {
    // Convertir les valeurs de l'objet en tableau
    const cardArray = cloneDeep(Object.values(this.cards.data));
    
    // Mélanger le tableau
    const shuffledArray = this.shuffleArray(cardArray);

    // Prendre les 8 premiers éléments
    this.displayedCards = shuffledArray.slice(0, 8);
  }

  // Fonction pour mélanger un tableau (utilisant l'algorithme de Fisher-Yates)
  private shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

/* TODO chercher comment sauvegarder les images dans le serveur
  downloadAndSaveCardImages() {
    for (const card of this.cards.data) {
      const imageUrl = card.card_images[0].image_url;
      const localFileName = `assets/cards/${card.id}.jpg`;
  
      this.cardImageService.checkIfImageExistsLocally(localFileName).subscribe(existsLocally => {
        if (!existsLocally) {
          // Télécharge l'image
          this.cardImageService.downloadCardImageFromHtmlPage(imageUrl).subscribe((blob: any) => {
            // Sauvegarde l'image localement
            this.cardImageService.saveCardImageLocally(blob, localFileName);
          });
        }
      });
      // Attribue le chemin local
      card.localImageUrl = localFileName;
    }
  }
 */ 
  
}

