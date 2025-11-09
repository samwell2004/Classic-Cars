
const selectedCar = localStorage.getItem('selectedCar');

function showTab() {
    // Hide all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    if (selectedCar) {
        const activeSection = document.getElementById(selectedCar);
        if (activeSection) {
            activeSection.classList.add('active');
        }
    }
}
document.addEventListener('DOMContentLoaded', showTab);
