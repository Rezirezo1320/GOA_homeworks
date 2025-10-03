const cards = [
    { title: 'Card 1', rating: 4.5, img: 'https://via.placeholder.com/250x150' },
    { title: 'Card 2', rating: 3.7, img: 'https://via.placeholder.com/250x150' },
    { title: 'Card 3', rating: 2.8, img: 'https://via.placeholder.com/250x150' },
    { title: 'Card 4', rating: 4.2, img: 'https://via.placeholder.com/250x150' },
    { title: 'Card 5', rating: 5.0, img: 'https://via.placeholder.com/250x150' },
    { title: 'Card 6', rating: 3.0, img: 'https://via.placeholder.com/250x150' },
    { title: 'Card 7', rating: 4.8, img: 'https://via.placeholder.com/250x150' },
    { title: 'Card 8', rating: 2.5, img: 'https://via.placeholder.com/250x150' },
    { title: 'Card 9', rating: 3.6, img: 'https://via.placeholder.com/250x150' },
    { title: 'Card 10', rating: 4.0, img: 'https://via.placeholder.com/250x150' }
];

const container = document.getElementById('card-container');

function renderCards(cardsToRender) {
    container.innerHTML = '';
    cardsToRender.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.innerHTML = `
            <img src="${card.img}" alt="${card.title}">
            <div class="card-content">
                <h3 class="card-title">${card.title}</h3>
                <p class="card-rating">Rating: ${card.rating}</p>
            </div>
        `;
        container.appendChild(cardElement);
    });
}

function filterBelowAverage() {
    const average = cards.reduce((sum, card) => sum + card.rating, 0) / cards.length;
    renderCards(cards.filter(card => card.rating >= average));
}

function sortCards(order) {
    const sortedCards = [...cards];
    if (order === 'asc') {
        sortedCards.sort((a, b) => a.rating - b.rating);
    } else if (order === 'desc') {
        sortedCards.sort((a, b) => b.rating - a.rating);
    } else if (order === 'random') {
        sortedCards.sort(() => Math.random() - 0.5);
    }
    renderCards(sortedCards);
}

document.getElementById('filter').addEventListener('click', filterBelowAverage);
document.getElementById('sort-asc').addEventListener('click', () => sortCards('asc'));
document.getElementById('sort-desc').addEventListener('click', () => sortCards('desc'));
document.getElementById('sort-random').addEventListener('click', () => sortCards('random'));

renderCards(cards);