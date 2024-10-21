document.addEventListener('DOMContentLoaded', (event) => {
    fetch('navigation_copy_en.html')
      .then(response => response.text())
      .then(text => document.getElementById('nav-placeholder').innerHTML = text);
  });