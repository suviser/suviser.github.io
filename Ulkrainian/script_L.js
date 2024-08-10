document.addEventListener('DOMContentLoaded', function() {
    const languageButton = document.querySelector('.language-button');
    const languageDropdown = document.querySelector('.language-dropdown');

    languageButton.addEventListener('click', function() {
        languageDropdown.style.display = languageDropdown.style.display === 'block' ? 'none' : 'block';
    });

    // Close the dropdown if the user clicks outside of it
    window.addEventListener('click', function(event) {
        if (!event.target.matches('.language-button')) {
            languageDropdown.style.display = 'none';
        }
    });
});
