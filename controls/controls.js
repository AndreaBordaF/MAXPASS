'use strict';
import {cards} from '../models/CardModel.js';
import * as tableView from '../views/js/tableView.js';
import {SetActiveLink, SetupTabs, SetupPayModal, SetupEditModal, SetupSuccessModal, payModal, editModal} from '../views/js/main.js';

window.onload = () => {
    selectByEtm.value = 0;
    radioStatus[0].checked = true;
    tableView.LoadTable(cards.getAllCards());
    SetActiveLink();
    SetupTabs();
    SetupPayModal();
    SetupEditModal();
    SetupSuccessModal();
};

//FUNTION FOR FILTER BY ETM
const selectByEtm = document.getElementById("slc-etm");

selectByEtm.addEventListener("change", () =>{
  tableView.filters.byEtm = parseInt(selectByEtm.value);
  tableView.ActiveFilters(cards.getAllCards());
});

//FUNTION FOR FILTER BY STATUS IT'S WORKING!!
const radioStatus = document.querySelectorAll('input[name="status"]');
radioStatus.forEach(radio =>{
  radio.addEventListener("change", () =>{
    tableView.filters.byStatus = radio.value;
    tableView.ActiveFilters(cards.getAllCards());
  });
});

//FUNTION TO FILTER BY DATE
tableView.picker.on('select', () => {
  tableView.filters.byDateStart = tableView.picker.getStartDate();
  tableView.filters.byDateEnd = tableView.picker.getEndDate();
  tableView.ActiveFilters(cards.getAllCards());
});

// FUNTION FOR UDPADTE CARD
const editForm = document.getElementById('edit-form');
editForm.addEventListener('submit', (e) => {
  e.preventDefault();
  var numCard = parseInt(document.getElementById('edit-numCard').value) ;
  var newData ={status: document.getElementById('edit-status').checked};       
  if (cards.updateCard(numCard, newData) !== null) {
    editForm.reset();
    const modalSuccess = document.getElementById('modal-sucs');
    const successTittle = document.getElementById('success-tittle');
    const successMessage = document.getElementById('success-message');
    successTittle.textContent = 'Tarjeta actualizada';
    successMessage.textContent = 'La tarjeta se actualizó correctamente';
    editModal.close();
    modalSuccess.showModal();
    tableView.LoadTable(cards.getAllCards());
    SetupEditModal();
  }
});


// FUNTION FOR PAY CARD
const payForm = document.getElementById('pay-form');
var payNumCard = document.getElementById('pay-numCard');
var payAmount = document.getElementById('pay-amount');
payForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const value = payAmount.value.trim();
  if(value.length > 0 && /^\d+$/.test(value)){
    var balance = cards.getCardByNumCard(parseInt(payNumCard.value)).amount;
    var amount = balance + parseInt(value);
    var newData = {balance: balance, amount: amount};
    if (cards.updateCard(parseInt(payNumCard.value), newData) !== null){
      payForm.reset();
      const modalSuccess = document.getElementById('modal-sucs');
      const successTittle = document.getElementById('success-tittle');
      const successMessage = document.getElementById('success-message');
      successTittle.textContent = 'Pago realizado';
      successMessage.textContent = 'El pago se realizó correctamente';
      payModal.close();
      modalSuccess.showModal();
      tableView.LoadTable(cards.getAllCards());
      SetupPayModal();
    };
  }
});
