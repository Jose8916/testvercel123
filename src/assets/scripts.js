let currentIndex = 0;
const caseStudiesContainer = document.querySelector('.case-studies-container');
const caseStudies = document.querySelectorAll('.case-study');

function showCaseStudy(index) {
    const total = caseStudies.length;
    currentIndex = (index + total) % total; // Asegura que el índice esté en el rango válido
    const offset = -currentIndex * 100;
    caseStudiesContainer.style.transform = `translateX(${offset}%)`;
}

function nextCaseStudy() {
    showCaseStudy(currentIndex + 1);
}

function prevCaseStudy() {
    showCaseStudy(currentIndex - 1);
}

document.querySelector('.next').addEventListener('click', nextCaseStudy);
document.querySelector('.prev').addEventListener('click', prevCaseStudy);
