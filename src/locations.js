import plantCafe from './images/plant-cafe.jpg';
import vistaCafe from './images/vista-cafe.jpg';
import { getNav } from './nav.js';

function getLocations() {
    const content = document.querySelector('#content');
    content.classList.remove('about-us');
    content.classList.remove('home');
    content.classList.remove('contact');
    content.classList.add('locations');

    getNav();

    const locationOne = document.createElement('div');
    locationOne.classList.add('locationDiv');
    content.appendChild(locationOne);

    const locationTwo = document.createElement('div');
    locationTwo.classList.add('locationDiv');
    content.appendChild(locationTwo);

    const locationContentOne = document.createElement('div');
    locationContentOne.classList.add('location-content');
    locationOne.appendChild(locationContentOne);

    const locationContentTwo = document.createElement('div');
    locationContentTwo.classList.add('location-content');
    locationTwo.appendChild(locationContentTwo);

    const oceanside = document.createElement('h2');
    oceanside.textContent = 'Oceanside';
    locationContentOne.appendChild(oceanside);
    const oceansideAddress = document.createElement('p');
    oceansideAddress.classList.add('location-para');
    oceansideAddress.textContent = '11 Oceanside Avenue, Oceanside, CA';
    locationContentOne.appendChild(oceansideAddress);
    const oceansideHours = document.createElement('p');
    oceansideHours.classList.add('location-para');
    oceansideHours.textContent = 'Open Daily: 8am to 6pm';
    locationContentOne.appendChild(oceansideHours);

    const oceansideImg = document.createElement('img');
    oceansideImg.classList.add('location-img');
    oceansideImg.src = plantCafe;
    locationOne.appendChild(oceansideImg);

    const vista = document.createElement('h2');
    vista.textContent = 'Vista';
    locationContentTwo.appendChild(vista);
    const vistaAddress = document.createElement('p');
    vistaAddress.classList.add('location-para');
    vistaAddress.textContent = '22 Vista Boulevard, Vista, CA';
    locationContentTwo.appendChild(vistaAddress);
    const vistaHours = document.createElement('p');
    vistaHours.classList.add('location-para');
    vistaHours.textContent = 'Open Daily: 8am to 6pm';
    locationContentTwo.appendChild(vistaHours);

    const vistaImg = document.createElement('img');
    vistaImg.classList.add('location-img');
    vistaImg.src = vistaCafe;
    locationTwo.appendChild(vistaImg);
}

export {getLocations};