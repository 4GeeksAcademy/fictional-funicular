// function alerta() { //Intento de mostrar alerta
// let alert = document.getElementById('alerta').innerHTML = '<div class="alert alert-danger" role="alert"> <p class="float-start m-0">alertaaaaaaaaaaaaaaa</p> </div>';
// form.appendChild(alert);
// }

function validCredit() {
    let credit = document.getElementById('credit');
    let alert = document.getElementById('alert');
    for (let cards = 0; cards < credit.length; cards++) {
        if (credit[cards].value == '') {
            alert.removeAttribute('hidden');
            console.log('Falta el credit card');
        } else {
            continue
        }
    }
}

function stopForm() {
    form.addEventListener('click', function (event) {
        event.preventDefault();
    })
}

function alertInput() {
    let form = document.getElementById('form');
    let alert = document.getElementById('alert');
    let alert2 = document.getElementById('alert2');
    stopForm()
    alertGreen()
    for (let i = 0; i < form.length; i++) {
        if (form[i].value == '') {
            form[i].style.background = '#fcc';
            alert.removeAttribute('hidden');
        }
    }
}

function alertGreen() {
    let form = document.getElementById('form');
    let alert2 = document.getElementById('alert2');
    stopForm()
    for (let i = 0; i < form.length; i++) {
        if (form[i].value !== '' && form[i].value !== 'send' && form[i].value !== 'cancel' && form[i].value !== 'masterCard') {
            alert2.removeAttribute('hidden');
            console.log(form[i] + form[i].value);
        }
    }
}