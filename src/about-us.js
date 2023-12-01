import aboutUsImg from './images/about-us-img.jpg';

console.log('hello from about us page!');

const content = document.querySelector('#content');
content.classList.remove('home');
content.classList.add('about-us');

const section = document.createElement('div');
section.classList.add('section');
content.appendChild(section);

const aboutUsHeader = document.createElement('h1');
aboutUsHeader.classList.add('about-us-header');
aboutUsHeader.textContent = 'Nice to meet you!';
section.appendChild(aboutUsHeader);

const aboutUsPara = document.createElement('p');
aboutUsPara.classList.add('about-us-para');
aboutUsPara.textContent = 'We are Malaba. A fake coffee shop and cafe founded in 2018. We strive to provide the best coffee to our customers by sourcing our beans from organic and sustainable farms, and by our very own in-house roasting method we have perfected over the years as coffee enthusiasts. We would like to say we  have created a little community here at Malaba. We love our customers and do our best to provide a warm and welcoming atmosphere for them. We would love to see you soon!';
section.appendChild(aboutUsPara);

const img = document.createElement('img');
img.classList.add('about-us-img');
img.src = aboutUsImg;
content.appendChild(img);