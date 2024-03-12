document.addEventListener('DOMContentLoaded', (event) => {
    fetch('navigation.html')
      .then(response => response.text())
      .then(text => document.getElementById('nav-placeholder').innerHTML = text);
  });