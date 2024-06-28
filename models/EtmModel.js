'use strict'
import { Cards } from '../config/cards.js';
import { Etms } from "../config/etms.js";

class Etm{
    constructor(etmData){
        this.etms = etmData;
        this.countCards();
        this.saveEtms();
        this.loadEtms();
    }

    getAllEtms(){
        return this.etms;
    }
    
    saveEtms() {
        localStorage.setItem('etms', JSON.stringify(this.etms));
    }

    loadEtms(){
        if(localStorage.getItem('etms')){
            this.etms = JSON.parse(localStorage.getItem('etms'));
        }
    }

    countCards(){
        this.etms.forEach(etm => {
            const associatedCards = Cards.filter(card => card.etmId === etm.numEtm);
            etm.totalCards = associatedCards.length;
        });
    }
}

export const etm = new Etm(Etms);



