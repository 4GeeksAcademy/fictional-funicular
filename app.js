function alertInput() {
let form = document.getElementById('form');
for (let i = 0; i < form.length; i++) {
    if (form[i].value == '') {
        form[i].style.background = '#fcc'
    }
}
}

// document.body.style.background = 'yellow'
// form[1].style.background = 'red'

