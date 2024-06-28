'use strict';
import { Cards } from '../config/cards.js';

class CardModel{
    constructor(cardsData){
        this.cards = cardsData;
        this.saveCards();
        this.loadCards();
    }

    getAllCards(){
        return this.cards;
    }

    getCardByNumCard(numCard){
        return this.cards.find(card => card.numCard === numCard);
    }
    
    updateCard(card, newData){
        const index = this.cards.findIndex(c => c.numCard === card);
        if(index !== -1){
            this.cards[index] = {...this.cards[index], ...newData};
            this.saveCards();
            return this.cards[index];
        }
        return null;
    }

    saveCards() {
        localStorage.setItem('cards', JSON.stringify(this.cards));
    }

    loadCards() {
        if(localStorage.getItem('cards')){
            this.cards = JSON.parse(localStorage.getItem('cards'));
        }
    }
}

export const cards = new CardModel(Cards);
