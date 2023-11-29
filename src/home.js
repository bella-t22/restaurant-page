const content = document.querySelector('#content');

const title = document.createElement('h1');
title.textContent = 'Malaba';
content.appendChild(title);

const headline = document.createElement('p');
headline.textContent = 'Good Times, Better Coffee';

const img = document.createElement('img');
img.src = './images/coffee-on-eighth.jpg';
img.classList.add('cafe-img');
content.appendChild(img);

