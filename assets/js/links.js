export default function links() {
    const cards = document.querySelectorAll('.card');
    const detailImage = document.getElementById('detail-image');
    const siteLink = document.querySelector('.detail-links a:first-child');
    const githubLink = document.querySelector('.detail-links a:nth-child(2)');
    
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const imageSrc = card.getAttribute('data-image');
            detailImage.src = imageSrc;
        
            const siteURL = card.getAttribute('data-site');
            const githubURL = card.getAttribute('data-github');
        
            if (siteURL) siteLink.href = siteURL;
            if (githubURL) githubLink.href = githubURL;
        });
    });
}