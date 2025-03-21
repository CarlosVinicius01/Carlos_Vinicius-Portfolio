export default function detail() {
    const cards = document.querySelectorAll('.card');
    const detailContainer = document.getElementById('project-detail');
    const overlay = document.getElementById('overlay');
    const detailTitle = document.getElementById('detail-title');
    const detailDesc = document.getElementById('detail-description');
    const detailImage = document.getElementById('detail-image');
    const backBtn = document.querySelector('.back-btn');

    function openDetail(title, description, image) {
        detailTitle.textContent = title;
        detailDesc.textContent = description;
        detailImage.src = image; 
        detailContainer.classList.add('active');
        overlay.classList.add('active');
    }

    function closeDetail() {
        detailContainer.classList.remove('active');
        overlay.classList.remove('active');
        detailImage.src = ''; 
    }

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const title = card.getAttribute('data-title');
            const description = card.getAttribute('data-description');
            const image = card.getAttribute('data-image'); 
            openDetail(title, description, image);
        });
    });

    overlay.addEventListener('click', closeDetail);
    backBtn.addEventListener('click', closeDetail);
}