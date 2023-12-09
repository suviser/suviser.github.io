let currentSectionId = 'section1';

function toggleSection(sectionId) {
    // Скрываем только текущую видимую секцию
    document.getElementById(currentSectionId).classList.add('hidden');

    // Показываем выбранную секцию
    document.getElementById(sectionId).classList.remove('hidden');

    // Обновляем текущую видимую секцию
    currentSectionId = sectionId;
}


function toggleNav() {
    var dropdown = document.querySelector('.nav-dropdown ul');
    dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
  }
  