// export default function carousel() {
//     const leftBtn = document.querySelector('.left-btn');
//     const rightBtn = document.querySelector('.right-btn');
//     const dotsContainer = document.querySelector('.carousel-dots');
//     const cardsContainer = document.querySelector('.cards-container');
//     const cards = document.querySelectorAll('.card');
//     let cardsPerPage = 3;
//     let currentIndex = 0;
//     let cardWidth = cards[0].offsetWidth; // Largura de cada card
//     let totalPages = Math.ceil(cards.length / cardsPerPage);

//     // Função para atualizar o número de cards por página dependendo da largura da tela
//     function updateCardsPerPage() {
//         if (window.innerWidth < 780) {
//             cardsPerPage = 1; // Para telas menores, exibe 1 card por vez
//         } else {
//             cardsPerPage = 3; // Para telas maiores, exibe 3 cards por vez
//         }
//         // Recalcula o total de páginas após ajustar o número de cards por página
//         totalPages = Math.ceil(cards.length / cardsPerPage);
//         updateCarousel();  // Recalcula o carrossel após alteração
//         updateDots();      // Atualiza os pontos após alteração
//     }

//     // Atualiza os pontos de navegação
//     function updateDots() {
//         dotsContainer.innerHTML = ''; // Limpa os pontos existentes
//         for (let i = 0; i < totalPages; i++) {
//             const dot = document.createElement('div');
//             dot.classList.add('carousel-dot');
//             if (i === currentIndex) dot.classList.add('active');
//             dotsContainer.appendChild(dot);

//             // Altera a página ao clicar nos pontos
//             dot.addEventListener('click', () => {
//                 currentIndex = i;
//                 updateCarousel();
//             });
//         }
//     }

//     // Atualiza o carrossel com base no índice atual
//     function updateCarousel() {
//         cardWidth = cards[0].offsetWidth;  // Atualiza a largura do card a cada mudança
//         const offset = currentIndex * cardWidth * cardsPerPage;
//         cardsContainer.scrollTo({
//             left: offset,
//             behavior: 'smooth',
//         });

//         // Atualiza a classe ativa dos pontos
//         const dots = document.querySelectorAll('.carousel-dot');
//         dots.forEach(dot => dot.classList.remove('active'));
//         if (dots[currentIndex]) {
//             dots[currentIndex].classList.add('active');
//         }
//     }

//     // Atualiza a navegação com os botões
//     leftBtn.addEventListener('click', () => {
//         if (currentIndex > 0) {
//             currentIndex--;
//             updateCarousel();
//         }
//     });

//     rightBtn.addEventListener('click', () => {
//         if (currentIndex < totalPages - 1) {
//             currentIndex++;
//             updateCarousel();
//         }
//     });

//     // Função para reconfigurar o carrossel ao redimensionar a tela
//     window.addEventListener('resize', () => {
//         updateCardsPerPage();  // Atualiza o número de cards por página
//         updateCarousel();      // Atualiza o carrossel para garantir o alinhamento correto
//     });

//     // Inicializa o carrossel
//     updateCardsPerPage();
//     updateDots();
//     updateCarousel();
// }

export default function carousel() {
    const leftBtn = document.querySelector('.left-btn');
    const rightBtn = document.querySelector('.right-btn');
    const dotsContainer = document.querySelector('.carousel-dots');
    const cardsContainer = document.querySelector('.cards-container');
    const cards = document.querySelectorAll('.card');
    let cardsPerPage = 3;
    let currentIndex = 0;
    let cardWidth = cards[0].offsetWidth; // Largura de cada card
    let totalPages = Math.ceil(cards.length / cardsPerPage);

    // Função para atualizar o número de cards por página dependendo da largura da tela
    function updateCardsPerPage() {
        if (window.innerWidth < 780) {
            cardsPerPage = 1; // Para telas menores, exibe 1 card por vez
        } else {
            cardsPerPage = 3; // Para telas maiores, exibe 3 cards por vez
        }
        // Recalcula o total de páginas após ajustar o número de cards por página
        totalPages = Math.ceil(cards.length / cardsPerPage);
        updateCarousel();  // Recalcula o carrossel após alteração
        updateDots();      // Atualiza os pontos após alteração
    }

    // Atualiza os pontos de navegação
    function updateDots() {
        dotsContainer.innerHTML = ''; // Limpa os pontos existentes
        for (let i = 0; i < totalPages; i++) {
            const dot = document.createElement('div');
            dot.classList.add('carousel-dot');
            if (i === currentIndex) dot.classList.add('active');
            dotsContainer.appendChild(dot);

            // Altera a página ao clicar nos pontos
            dot.addEventListener('click', () => {
                currentIndex = i;
                updateCarousel();
            });
        }
    }

    // Atualiza o carrossel com base no índice atual
    function updateCarousel() {
        cardWidth = cards[0].offsetWidth;  // Atualiza a largura do card a cada mudança
        const offset = currentIndex * cardWidth * cardsPerPage;
        cardsContainer.scrollTo({
            left: offset,
            behavior: 'smooth',
        });

        // Atualiza a classe ativa dos pontos
        const dots = document.querySelectorAll('.carousel-dot');
        dots.forEach(dot => dot.classList.remove('active'));
        if (dots[currentIndex]) {
            dots[currentIndex].classList.add('active');
        }
    }

    // Função para detectar deslizar para a esquerda ou direita
    let startX = 0;
    let endX = 0;

    function handleTouchStart(e) {
        startX = e.touches[0].pageX; // Pega a posição inicial do toque
    }

    function handleTouchMove(e) {
        endX = e.touches[0].pageX; // Pega a posição final do toque
    }

    function handleTouchEnd() {
        if (startX - endX > 100) { // Deslizar para a esquerda
            if (currentIndex < totalPages - 1) {
                currentIndex++;
                updateCarousel();
            }
        } else if (endX - startX > 100) { // Deslizar para a direita
            if (currentIndex > 0) {
                currentIndex--;
                updateCarousel();
            }
        }
    }

    // Adiciona os eventos de toque apenas em telas pequenas
    if (window.innerWidth < 780) {
        cardsContainer.addEventListener('touchstart', handleTouchStart);
        cardsContainer.addEventListener('touchmove', handleTouchMove);
        cardsContainer.addEventListener('touchend', handleTouchEnd);
    }

    // Atualiza a navegação com os botões (para telas maiores)
    leftBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    rightBtn.addEventListener('click', () => {
        if (currentIndex < totalPages - 1) {
            currentIndex++;
            updateCarousel();
        }
    });

    // Função para reconfigurar o carrossel ao redimensionar a tela
    window.addEventListener('resize', () => {
        updateCardsPerPage();  // Atualiza o número de cards por página
        updateCarousel();      // Atualiza o carrossel para garantir o alinhamento correto
    });

    // Inicializa o carrossel
    updateCardsPerPage();
    updateDots();
    updateCarousel();
}
