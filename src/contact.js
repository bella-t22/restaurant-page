import contactImage from './images/contact-img.jpg';

const content = document.querySelector('#content');
content.classList.remove('about-us');
content.classList.remove('home');
content.classList.remove('locations');
content.classList.add('contact');

const contactImg = document.createElement('img');
contactImg.classList.add('contact-img');
contactImg.src = contactImage;
content.appendChild(contactImg);

const contactContent = document.createElement('div');
contactContent.classList.add('contact-content');
content.appendChild(contactContent);

const contactTitle = document.createElement('h1');
contactTitle.classList.add('contact-header');
contactTitle.textContent = 'Contact';
contactContent.appendChild(contactTitle);

const phone = document.createElement('p');
phone.classList.add('contact-para');
phone.textContent = 'Phone: 111-122-1212';
contactContent.appendChild(phone);

const email = document.createElement('p');
email.classList.add('contact-para');
email.textContent = 'Email: malaba@fake-email.com';
contactContent.appendChild(email);