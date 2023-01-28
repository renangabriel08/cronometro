let hora = 0;
let minuto = 0;
let segundo = 0;
let milissegundo = 0;

let cron;

function start() {
  pause();
  cron = setInterval(() => { timer(); }, 10);
}

function pause() {
  clearInterval(cron);
}

function reset() {
  hora = 0;
  minuto = 0;
  segundo = 0;
  milissegundo = 0;
  document.getElementById('hora').innerHTML = '00';
  document.getElementById('minuto').innerHTML = '00';
  document.getElementById('segundo').innerHTML = '00';
  document.getElementById('milissegundo').innerHTML = '000';
}

function timer() {
  if ((milissegundo += 10) == 1000) {
    milissegundo = 0;
    segundo++;
  }
  if (segundo == 60) {
    segundo = 0;
    minuto++;
  }
  if (minuto == 60) {
    minuto = 0;
    hora++;
  }
  document.getElementById('hora').innerHTML = returnData(hora);
  document.getElementById('minuto').innerHTML = returnData(minuto);
  document.getElementById('segundo').innerHTML = returnData(segundo);
  document.getElementById('milissegundo').innerHTML = returnData(milissegundo);
}

function returnData(input) {
    if(input < 10) {
        return `0${input}`
    }
    else {
        return input
    }
}