/* DOM Elements */
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const body = document.body;

// Apply cached theme on reload
function applyTheme(theme) {
    if (theme === 'one') {
      body.classList.remove('two', 'three');

    } else if (theme === 'two') {
      body.classList.remove('one', 'three');
    } else if (theme === 'three') {
      body.classList.remove('one', 'two');
    }
    body.classList.add(theme);
    localStorage.setItem('theme', theme);
  
    // Check the radio button
    const radio = document.getElementById(theme);
    if (radio) {
      radio.checked = true;
    }
  }
  
  // Check the previously selected theme on page load
  document.addEventListener("DOMContentLoaded", () => {
    const theme = localStorage.getItem('theme');
    if (theme === 'one' || theme === 'two' || theme === 'three') {
      applyTheme(theme);
    }
  });

// Event listeners

one.addEventListener('click', () => applyTheme('one'));
two.addEventListener('click', () => applyTheme('two'));
three.addEventListener('click', () => applyTheme('three'));

/* 
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
}) */