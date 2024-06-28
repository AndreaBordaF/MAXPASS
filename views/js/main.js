'use strict';
//NAVBAR ACTIVE LINK
export function SetActiveLink() {
  const activePage = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav a');

  navLinks.forEach(link => {
    if (link.href.includes(activePage)) {
      link.classList.add('active');
    };
  });
}

// TABS FUNCTIONALITY
export function SetupTabs() {
  const tab = document.querySelectorAll('.tab');
  const block = document.querySelectorAll('.block');
  for (let i = 0; i < tab.length; i++) {
    tab[i].addEventListener('click', () => {
      for (let j = 0; j < tab.length; j++) {
        tab[j].classList.remove('active');
        block[j].classList.remove('active');
      }
      tab[i].classList.add('active');
      block[i].classList.add('active');
    });
  };
}

// MODAL FOR PAY
export const payModal = document.getElementById('modal-pay');
export function SetupPayModal() {
    const btnOpenPay = document.querySelectorAll('.pay');
    const btnClosePay = document.getElementById('close-pay');
    const btnCancelPay = document.getElementById('cancel-pay');
    const entireTable = document.getElementById('mytable');
    var payNumCard = document.getElementById('pay-numCard');
    var payAmount = document.getElementById('pay-amount');
    const btnPay = document.getElementById('make-pay');

    
    btnOpenPay.forEach(btn => {
      btn.addEventListener('click', () => {
        payModal.showModal();
      });
    });

    btnClosePay.addEventListener('click', (e) => {
      e.preventDefault();
      payModal.close();
      btnPay.disabled = true;
    });

    btnCancelPay.addEventListener('click', () => {
      payModal.close();
    });

    entireTable.addEventListener('click', e =>{
      e.stopPropagation();
      let data = (e.target.parentElement.parentElement.parentElement.children);
      payNumCard.value = data[1].textContent;
    });

    payAmount.addEventListener('input', () => {
      let value = payAmount.value.trim();
      value = value.replace(/\D/g, '');//Remplazar cualquier caracter que no sea un digito por un string vacio
      payAmount.value = value;

      btnPay.disabled = !(value.length > 0 && /^\d+$/.test(value));
    });
};

// MODAL FOR EDIT
export const editModal = document.getElementById('modal-edit');
export function SetupEditModal() {
    const btnOpenEdit = document.querySelectorAll('.edit');
    const btnCancelEdit = document.getElementById('cancel-edit');
    const btnOkEdit = document.getElementById('submit-edit');
    const entireTable = document.getElementById('mytable');
    const btnTonggle = document.getElementById('edit-status');

    btnOpenEdit.forEach(btn => {
      btn.addEventListener('click', () => {
        editModal.showModal();
        btnOkEdit.disabled = true;
      });
    });

    btnCancelEdit.addEventListener('click', (e) => {
      e.preventDefault();
      editModal.close();
      btnOkEdit.disabled = true;
    });

    entireTable.addEventListener('click', e =>{
      e.stopPropagation();
      let data = (e.target.parentElement.parentElement.parentElement.children);
      FillData(data);
    });

    function FillData(data){
      const inputs = document.querySelectorAll('#edit-form .form-content input')
      for (let i = 0; i <= 2; i++) {
        inputs[i].value = data[i+1].textContent;
        inputs[i].disabled = true;
      };
      data[4].textContent == "Habilitado" ? inputs[3].checked = true : inputs[3].checked = false;
    };

    btnTonggle.addEventListener('change', () => {
      btnOkEdit.disabled = false;
      }
    );
};

// MODAL TO SUCCESS OK
export function SetupSuccessModal() {
    const modalSuccess = document.getElementById('modal-sucs');
    const btnCloseSucs = document.getElementById('close-sucs');

    btnCloseSucs.addEventListener('click', () => {
      modalSuccess.close();
    });
};
