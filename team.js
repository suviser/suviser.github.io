// let currentSectionId = 'section0';

// function toggleSection(sectionId) {
//     // Скрываем только текущую видимую секцию
//     document.getElementById(currentSectionId).classList.add('hidden');

//     // Показываем выбранную секцию
//     document.getElementById(sectionId).classList.remove('hidden');

//     // Обновляем текущую видимую секцию
//     currentSectionId = sectionId;
// }


function toggleSection(sectionId) {
    const sections = document.querySelectorAll('section[id^="section"]');
    sections.forEach(section => {
        section.classList.remove('active');
        section.classList.add('hidden');
    });
    const activeSection = document.getElementById(sectionId);
    activeSection.classList.remove('hidden');
    activeSection.classList.add('active');
}
