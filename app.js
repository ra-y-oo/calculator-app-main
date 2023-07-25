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
