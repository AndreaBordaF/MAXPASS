'use strict';
const tableBody = document.getElementById("mytlbody");
const avrgBalance = document.getElementById("avg-balance");
const avrgAmount = document.getElementById("avg-amount");
const totalBalance = document.getElementById("total-balance");
const totalAmount = document.getElementById("total-amount");
avrgBalance.innerHTML = "0";
avrgAmount.innerHTML = "0";
totalBalance.innerHTML = "0";
totalAmount.innerHTML = "0";

export const filters ={
  byEtm: 0,
  byStatus: "all",
  byDateStart: null,
  byDateEnd: null,
}

function GetStatusClass(status) {
  let state, stateClass;
  if (status) {
    state = "Habilitado";
    stateClass = "enable";
  } else {
    state = "Desabilitado";
    stateClass = "disable";
  }
  return {state, stateClass};
};


function WriteDataTable(object){
  const {state, stateClass} = GetStatusClass(object.status);
  tableBody.innerHTML += `
    <tr>
      <td>ETM00${object.etmId}</td>
      <td>${object.numCard}</td>
      <td>${object.numChip}</td>
      <td>${new Date(object.dateStar).toLocaleDateString()}</td>
      <td class="status"><p class="tag ${stateClass}">${state}</p></td>
      <td>${object.balance.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}</td>
      <td>${object.amount.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}</td>
      <td class="buttons">
        <button class="btn-icon edit">
          <i class="fa-solid fa-pen-to-square"></i>
        </button>
        <button class="btn-icon pay">
          <i class="fa-solid fa-money-bill-transfer"></i>
        </button>
      </td>
    </tr>`;
    //con toLocaleString('es-CL', { style: 'currency', currency: 'CLP' }) estoy formateando el numero a moneda chilena
};

export const picker = new easepick.create({
  element: document.getElementById('datepicker'),
  css: [
    'css/datepicker.css'
  ],
  lang: 'es-Es',
  plugins: ['RangePlugin'],
  RangePlugin: {
    locale: {
      one: 'dag',
      other: 'dagar',
    },
  },
  format: 'DD-MM-YYYY',
});

window.onload = picker.clear();

export function LoadTable(cards) {
  tableBody.innerHTML = "";
  cards.forEach(element => {
    WriteDataTable(element);
  });
  CalcAverage();
  CalcTotal();
};

export function ActiveFilters(cards) {
  tableBody.innerHTML = "";
  cards.forEach(element => {
    let mach = true;
    if (filters.byEtm !== 0 && element.etmId !== filters.byEtm) {
      mach = false;
    }
    
    switch(filters.byStatus){
      case "abt-c":
        if(element.status != true){
          mach = false;
        }
        break;
      case "dabt-c":
        if(element.status != false){
          mach = false;
        }
        break
      default:
        break;
    }

    if (filters.byDateStart && filters.byDateEnd){
      if(new Date(element.dateStar) < filters.byDateStart || new Date(element.dateStar) > filters.byDateEnd) {
        mach = false;
      }
    };

    if(mach){
      WriteDataTable(element);
    }
  });
  CalcAverage();
  CalcTotal();
};

function CalcAverage(){
  const rows = document.querySelectorAll('tbody tr');
  let balance = 0;
  let amount = 0;
  rows.forEach(row => {
    const cell = row.querySelectorAll('td');
    //textContent te sirve para obtener el texto de un elemento y replace(/\D/g,'') mas en especifico (/\D/g,'') para eliminar cualquier caracter que no sea un numero y remplazarlo por un espacio vacio
    balance += parseInt(cell[5].textContent.replace(/\D/g,''));
    amount += parseInt(cell[6].textContent.replace(/\D/g,''));
  });
  avrgBalance.innerHTML = (balance / rows.length).toLocaleString('es-CL', { style: 'currency', currency: 'CLP' });
  avrgAmount.innerHTML = (amount / rows.length).toLocaleString('es-CL', { style: 'currency', currency: 'CLP' });
};

function CalcTotal(){
  const rows = document.querySelectorAll('tbody tr');
  let balance = 0;
  let amount = 0;
  rows.forEach(row => {
    const cell = row.querySelectorAll('td');
    balance += parseInt(cell[5].textContent.replace(/\D/g,''));
    amount += parseInt(cell[6].textContent.replace(/\D/g,''));
  });
  totalBalance.innerHTML = balance.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' });
  totalAmount.innerHTML = amount.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' });
};

