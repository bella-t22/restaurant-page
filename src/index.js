import './app.css';
import { getHome } from './home.js';
import { getMenu } from './menu.js';
import { getContact } from './contact.js';
import { getAboutUs } from './about-us.js';
import { getLocations } from './locations.js';

getHome();

const btns = document.querySelectorAll('button');

const aboutUsBtn = document.querySelector('.about-us-btn');
const menuBtn = document.querySelector('.menu-btn');
const locationsBtn = document.querySelector('.locations-btn');
const contactBtn = document.querySelector('.contact-btn');

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        const content = document.querySelector('#content');
        while (content.firstChild) {
            content.removeChild(content.firstChild);
        }

        if (btn === aboutUsBtn) {
            getAboutUs();
        } else if (btn === menuBtn) {
            getMenu();
        } else if (btn === locationsBtn) {
            getLocations();
        } else if (btn === contactBtn) {
            getContact();
        }
    })
})