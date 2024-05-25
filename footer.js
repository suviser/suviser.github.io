document.addEventListener('DOMContentLoaded', (event) => {
    fetch('footer.html')
      .then(response => response.text())
      .then(text => document.getElementById('footer-placeholder').innerHTML = text);
  });

