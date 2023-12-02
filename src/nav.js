import { getHome } from './home.js';
import { getMenu } from './menu.js';
import { getContact } from './contact.js';
import { getAboutUs } from './about-us.js';
import { getLocations } from './locations.js';

function getNav() {
    const content = document.querySelector('#content');

    const navbar = document.createElement('div');
    navbar.classList.add('navbar');
    content.appendChild(navbar);

    const navTitle = document.createElement('h1');
    navTitle.classList.add('nav-title');
    navTitle.textContent = 'Malaba';
    navbar.appendChild(navTitle);

    const linkDiv = document.createElement('div');
    linkDiv.classList.add('link-div');
    navbar.appendChild(linkDiv);

    const homeLink = document.createElement('button');
    homeLink.classList.add('nav-link');
    homeLink.textContent = 'Home';
    linkDiv.appendChild(homeLink);

    const aboutUsLink = document.createElement('button');
    aboutUsLink.classList.add('nav-link');
    aboutUsLink.textContent = 'About Us';
    linkDiv.appendChild(aboutUsLink);

    const menuLink = document.createElement('button');
    menuLink.classList.add('nav-link');
    menuLink.textContent = 'Menu';
    linkDiv.appendChild(menuLink);

    const locationsLink = document.createElement('button');
    locationsLink.classList.add('nav-link');
    locationsLink.textContent = 'Locations';
    linkDiv.appendChild(locationsLink);

    const contactLink = document.createElement('button');
    contactLink.classList.add('nav-link');
    contactLink.textContent = 'Contact';
    linkDiv.appendChild(contactLink);

    const btns = document.querySelectorAll('button');
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            while (content.firstChild) {
                content.removeChild(content.firstChild);
            }

            if (btn === homeLink) {
                getHome();
            } else if (btn === aboutUsLink) {
                getAboutUs();
            } else if (btn === menuLink) {
                getMenu();
            } else if (btn === locationsLink) {
                getLocations();
            } else if (btn === contactLink) {
                getContact()
            }
        });
    });
}

export {getNav};