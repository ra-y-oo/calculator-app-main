/* DOM Elements */
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const body = document.body;

// Apply cached theme on reload

const theme = localStorage.getItem('theme');


if (theme) {
    body.classList.add(theme);
}

// Event listeners

one.addEventListener('click', ()=>{
    if (body.classList.contains('two')){
        body.classList.replace('two', 'one');

    } else if (body.classList.contains('three')) {
        body.classList.replace('three', 'one');
    }
    localStorage.setItem('theme', 'one');
})

two.addEventListener('click', ()=>{
    if (body.classList.contains('one')){
        body.classList.replace('one', 'two');

    } else if (body.classList.contains('three')) {
        body.classList.replace('three', 'two');
    }
    localStorage.setItem('theme', 'two');
})

three.addEventListener('click', ()=>{
    if (body.classList.contains('two')){
        body.classList.replace('two', 'three');

    } else if (body.classList.contains('one')) {
        body.classList.replace('one', 'three');
    }
    localStorage.setItem('theme', 'three');
})