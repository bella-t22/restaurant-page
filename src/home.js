import coffee from './images/coffee-on-eighth.jpg';;

const content = document.querySelector('#content');

const img = document.createElement('img');
img.src = coffee;
img.classList.add('cafe-img');
content.appendChild(img);

const header = document.createElement('div');
header.classList.add('header');
content.appendChild(header);

const title = document.createElement('h1');
title.textContent = 'Malaba';
header.appendChild(title);

const headline = document.createElement('p');
headline.classList.add('headline');
headline.textContent = 'Good Times, Better Coffee';
header.appendChild(headline);

const para = document.createElement('p');
para.textContent = 'Founded in 2018, we are committed to roasting and brewing the finest coffee for our community while also providing a place for people to come together and enjoy themselves.';
header.appendChild(para);

const aboutUsBtn = document.createElement('button');
aboutUsBtn.textContent = 'About Us';
header.appendChild(aboutUsBtn);

const menuBtn = document.createElement('button');
menuBtn.textContent = 'Menu';
header.appendChild(menuBtn);

const locationsBtn = document.createElement('button');
locationsBtn.textContent = 'Locations';
header.appendChild(locationsBtn);

const contactBtn = document.createElement('button');
contactBtn.textContent = 'Contact';
header.appendChild(contactBtn);