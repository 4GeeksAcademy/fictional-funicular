// function alerta() {
    // let alert = document.getElementById('alerta').innerHTML = '<div class="alert alert-danger" role="alert"> <p class="float-start m-0">alertaaaaaaaaaaaaaaa</p> </div>';
    // form.appendChild(alert);
// }

function alertInput() {
    let form = document.getElementById('form');
    let alert = document.getElementById('alert')
    for (let i = 0; i < form.length; i++) {
        if (form[i].value == '') {
            form[i].style.background = '#fcc';
            alert.removeAttribute('hidden');
            //  alerta();
        }
    }     
}

// document.body.style.background = 'yellow'
// form[1].style.background = 'red'


