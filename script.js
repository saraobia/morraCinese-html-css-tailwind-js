const btnCarta = document.getElementById('btnCarta');
const btnSasso = document.getElementById('btnSasso');
const btnForbice = document.getElementById('btnForbice');
const imgPC = document.getElementById('imgPC');
const imgUser = document.getElementById('imgUser');
const risultato = document.getElementById('risultato');
const valore1 = document.getElementById('valore1');
const valore2 = document.getElementById('valore2');
const reset = document.getElementById('reset');
const user = document.getElementById('user');

let punteggioUser = 5;
let punteggioPC = 5;

user.textContent = prompt('Inserisci il tuo Username');

function finePartita() {
  punteggioUser = 5;
  punteggioPC = 5;
}

btnCarta.addEventListener('click', function () {
  imgUser.style.backgroundImage = "url('assets/carta.png')";
  let sceltaPC = Math.floor(Math.random() * 3 + 1);
  console.log(sceltaPC);
  if (sceltaPC == 1) {
    imgPC.style.backgroundImage = "url('assets/carta.png')";
    risultato.textContent = 'Pareggio';
    risultato.style.color = '#009CE1';
    if (punteggioUser == 0) {
      risultato.textContent = 'Pippo 97 ha perso';
      finePartita();
    } else if (punteggioPC == 0) {
      risultato.textContent = 'Computer ha perso';
      risultato.style.color = '#F43E8C';
      finePartita();
    }
  } else if (sceltaPC == 2) {
    imgPC.style.backgroundImage = "url('assets/sasso.png')";
    risultato.textContent = 'Hai Vinto!';
    risultato.style.color = '#04CC96';
    punteggioUser++;
    valore2.textContent = punteggioUser;
    punteggioPC--;
    valore1.textContent = punteggioPC;
    if (punteggioUser == 0) {
      risultato.textContent = 'Pippo 97 ha perso';
      risultato.style.color = '#F43E8C';
      finePartita();
    } else if (punteggioPC == 0) {
      risultato.textContent = 'Computer ha perso';
      risultato.style.color = '#F43E8C';
      finePartita();
    }
  } else {
    imgPC.style.backgroundImage = "url('assets/forbice.png')";
    risultato.textContent = 'Hai Perso..';
    risultato.style.color = '#F43E8C';
    punteggioUser--;
    valore2.textContent = punteggioUser;

    punteggioPC++;
    valore1.textContent = punteggioPC;

    if (punteggioUser == 0) {
      risultato.textContent = 'Pippo 97 ha perso';
      risultato.style.color = '#F43E8C';
      finePartita();
    } else if (punteggioPC == 0) {
      risultato.textContent = 'Computer ha perso';
      risultato.style.color = '#F43E8C';
      finePartita();
    }
  }
});

btnSasso.addEventListener('click', function () {
  imgUser.style.backgroundImage = "url('assets/sasso.png')";
  let sceltaPC = Math.floor(Math.random() * 3 + 1);
  console.log(sceltaPC);
  if (sceltaPC == 1) {
    imgPC.style.backgroundImage = "url('assets/carta.png')";
    risultato.textContent = 'Hai Perso..';
    risultato.style.color = '#F43E8C';
    punteggioUser--;
    valore2.textContent = punteggioUser;
    punteggioPC++;
    valore1.textContent = punteggioPC;
    if (punteggioUser == 0) {
      risultato.textContent = 'Pippo 97 ha perso';
      risultato.style.color = '#F43E8C';
      finePartita();
    } else if (punteggioPC == 0) {
      risultato.textContent = 'Computer ha perso';
      risultato.style.color = '#F43E8C';
      finePartita();
    }
  } else if (sceltaPC == 2) {
    imgPC.style.backgroundImage = "url('assets/sasso.png')";
    risultato.textContent = 'Pareggio';
    risultato.style.color = '#009CE1';
    if (punteggioUser == 0) {
      risultato.textContent = 'Pippo 97 ha perso';
      risultato.style.color = '#F43E8C';
      finePartita();
    } else if (punteggioPC == 0) {
      risultato.textContent = 'Computer ha perso';
      risultato.style.color = '#F43E8C';
      finePartita();
    }
  } else {
    imgPC.style.backgroundImage = "url('assets/forbice.png')";
    risultato.textContent = 'Hai Vinto!';
    risultato.style.color = '#04CC96';
    punteggioUser++;
    valore2.textContent = punteggioUser;
    punteggioPC--;
    valore1.textContent = punteggioPC;
    if (punteggioUser == 0) {
      risultato.textContent = 'Pippo 97 ha perso';
      risultato.style.color = '#F43E8C';
      finePartita();
    } else if (punteggioPC == 0) {
      risultato.textContent = 'Computer ha perso';
      risultato.style.color = '#F43E8C';
      finePartita();
    }
  }
});

btnForbice.addEventListener('click', function () {
  imgUser.style.backgroundImage = "url('assets/forbice.png')";
  let sceltaPC = Math.floor(Math.random() * 3 + 1);
  console.log(sceltaPC);
  if (sceltaPC == 1) {
    imgPC.style.backgroundImage = "url('assets/carta.png')";
    risultato.textContent = 'Hai Vinto!';
    risultato.style.color = '#04CC96';
    punteggioUser++;
    valore2.textContent = punteggioUser;
    punteggioPC--;
    valore1.textContent = punteggioPC;
    if (punteggioUser == 0) {
      risultato.textContent = 'Pippo 97 ha perso';
      risultato.style.color = '#F43E8C';
      finePartita();
    } else if (punteggioPC == 0) {
      risultato.textContent = 'Computer ha perso';
      risultato.style.color = '#F43E8C';
      finePartita();
    }
  } else if (sceltaPC == 2) {
    imgPC.style.backgroundImage = "url('assets/sasso.png')";
    risultato.textContent = 'Hai Perso..';
    risultato.style.color = '#F43E8C';
    punteggioUser--;
    valore2.textContent = punteggioUser;
    punteggioPC++;
    valore1.textContent = punteggioPC;
    if (punteggioUser == 0) {
      risultato.textContent = 'Pippo 97 ha perso';
      risultato.style.color = '#F43E8C';
      finePartita();
    } else if (punteggioPC == 0) {
      risultato.textContent = 'Computer ha perso';
      risultato.style.color = '#F43E8C';
      finePartita();
    }
  } else {
    imgPC.style.backgroundImage = "url('assets/forbice.png')";
    risultato.textContent = 'Pareggio';
    risultato.style.color = '#009CE1';
    if (punteggioUser == 0) {
      risultato.textContent = 'Pippo 97 ha perso';
      risultato.style.color = '#F43E8C';
      finePartita();
    } else if (punteggioPC == 0) {
      risultato.textContent = 'Computer ha perso';
      risultato.style.color = '#F43E8C';
      finePartita();
    }
  }
});

reset.addEventListener('click', function () {
  punteggioPC = 5;
  punteggioUser = 5;
  valore1.textContent = 5;
  valore2.textContent = 5;
});
