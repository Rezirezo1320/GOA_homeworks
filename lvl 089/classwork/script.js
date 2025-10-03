document.body.style.margin = '20px';
const buttonsContainer = document.createElement('div');
buttonsContainer.style.marginBottom = '20px'; 
document.body.appendChild(buttonsContainer);


const cardContainer = document.createElement('div');
cardContainer.style.display = 'flex'; 
cardContainer.style.flexWrap = 'wrap'; 
cardContainer.style.gap = '15px'; 
document.body.appendChild(cardContainer);

const cardsData = [
  { title: 'Item 1', rating: 85 },
  { title: 'Item 2', rating: 40 },
  { title: 'Item 3', rating: 75 },
  { title: 'Item 4', rating: 95 },
  { title: 'Item 5', rating: 60 },
];


function createCards(data) {
  cardContainer.innerHTML = ''; 

  
  for (let i = 0; i < data.length; i++) {
    const item = data[i]; 

    const card = document.createElement('div');
    card.style.border = '1px solid #ccc';
    card.style.borderRadius = '10px';
    card.style.padding = '15px';
    card.style.textAlign = 'center';
    card.style.width = '150px';


    const title = document.createElement('h3');
    title.textContent = item.title;


    const rating = document.createElement('p');
    rating.textContent = 'Rating: ' + item.rating; 
    rating.className = 'rating'; 
    
    card.appendChild(title);
    card.appendChild(rating);

    cardContainer.appendChild(card);
  }
}

createCards(cardsData);


function createButton(label, onClick) {
  const button = document.createElement('button');
  button.textContent = label; 
  button.style.marginRight = '10px'; 
  button.style.border = 'none';
  button.style.borderRadius = '5px';
  button.style.backgroundColor = '#007BFF';
  button.style.color = 'white';
  button.style.cursor = 'pointer';

  button.onclick = onClick;

  buttonsContainer.appendChild(button);
}


createButton('Filter Below Average', function () {
  let total = 0;

  for (let i = 0; i < cardsData.length; i++) {
    total += cardsData[i].rating;
  }

  const avgRating = total / cardsData.length;

  const ratings = document.getElementsByClassName('rating');
  for (let i = 0; i < ratings.length; i++) {
    if (cardsData[i].rating < avgRating) {
      ratings[i].style.display = 'none'; 
    }
  }
});
