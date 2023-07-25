/* DOM Elements */
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const body = document.body;

// Apply cached theme on reload

const theme = localStorage.getItem('theme');
const radioButtons = document.querySelectorAll('input[name="option"]');


if (theme) {
    body.classList.add(theme);
    for (const radio of radioButtons) {
        if (radio.value === theme){
            radio.checked = true;
            break;
        }
    }
}

// Event listeners

one.addEventListener('click', ()=>{
    if (body.classList.contains('two')){
        body.classList.replace('two', 'one');
        two.checked = false;
    } else if (body.classList.contains('three')) {
        body.classList.replace('three', 'one');
        three.checked = false;
    }
    localStorage.setItem('theme', 'one');
})

two.addEventListener('click', ()=>{
    if (body.classList.contains('one')){
        body.classList.replace('one', 'two');
        one.checked = false;
    } else if (body.classList.contains('three')) {
        body.classList.replace('three', 'two');
        three.checked = false;
    }
    localStorage.setItem('theme', 'two');
})

three.addEventListener('click', ()=>{
    if (body.classList.contains('two')){
        body.classList.replace('two', 'three');
        two.checked = false;
    } else if (body.classList.contains('one')) {
        body.classList.replace('one', 'three');
        one.checked = false;
    }
    localStorage.setItem('theme', 'three');
})