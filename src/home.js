import coffee from './images/coffee-on-eighth.jpg';;

function getHome() {
    const content = document.querySelector('#content');
    content.classList.remove('about-us');
    content.classList.remove('contact');
    content.classList.remove('locations');
    content.classList.add('home');

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
    aboutUsBtn.classList.add('about-us-btn');
    aboutUsBtn.textContent = 'About Us';
    header.appendChild(aboutUsBtn);

    const menuBtn = document.createElement('button');
    menuBtn.classList.add('menu-btn');
    menuBtn.textContent = 'Menu';
    header.appendChild(menuBtn);

    const locationsBtn = document.createElement('button');
    locationsBtn.classList.add('locations-btn');
    locationsBtn.textContent = 'Locations';
    header.appendChild(locationsBtn);

    const contactBtn = document.createElement('button');
    contactBtn.classList.add('contact-btn');
    contactBtn.textContent = 'Contact';
    header.appendChild(contactBtn);
}

export {getHome};