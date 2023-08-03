// function alerta() {
// let alert = document.getElementById('alerta').innerHTML = '<div class="alert alert-danger" role="alert"> <p class="float-start m-0">alertaaaaaaaaaaaaaaa</p> </div>';
// form.appendChild(alert);
// }


function alertInput() {
    let form = document.getElementById('form');
    let alert = document.getElementById('alert')
    // let alert2 = document.getElementById('alert2')
    for (let i = 0; i < form.length; i++) {
        if (form[i].value == '') {
            form[i].style.background = '#fcc';
            alert.removeAttribute('hidden');
            event.preventDefault(); // <<<<<===== ESTO SE MARCA TACHADO, PERO SI LO QUITO SE ROMPE EL CODIGO, PQ? NO SÉ 
            //  alerta();
        // }if (form[i].value !== 'send' && form[i].value !== 'cancel') {
        // alert2.removeAttribute('hidden');
    }
    }
}

// document.body.style.background = 'red'
// form[1].style.background = 'red'


// form.validar(function(event){
    
// })
