export default function seeMore() {
    const seeMore = document.querySelector('#see_more');
    const skills = document.querySelector('.skills');

    seeMore.addEventListener('click', () => {
        skills.classList.toggle('active');

        if (skills.classList.contains('active')) {
            return seeMore.textContent = 'Ver menos';
        }
        seeMore.textContent = 'Ver mais';
    });
}