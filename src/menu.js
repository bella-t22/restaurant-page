import latteImg from './images/latte.jpg';
import espressoImg from './images/espresso.jpg';
import chaiImg from './images/chai.jpg';
import cappuccinoImg from './images/cappuccino.jpg';
import macchiatoImg from './images/macchiato.jpg';
import mochaImg from './images/mocha.jpg';
import teaImg from './images/teas.jpg';
import sconeImg from './images/scone.jpg';
import cinBunImg from './images/cinnamon-bun.jpg';
import muffinImg from './images/muffin.jpg';
import frenchToastImg from './images/french-toast.jpg';
import croissantImg from './images/croissant.jpg';
import biscottiImg from './images/biscotti.jpg';

const content = document.querySelector('#content');

const menuTitle = document.createElement('h1');
menuTitle.classList.add('menu-title');
menuTitle.textContent = 'Menu';
content.appendChild(menuTitle);

const drinkHeader = document.createElement('h2');
drinkHeader.classList.add('menu-header');
drinkHeader.textContent = 'Drinks';
content.appendChild(drinkHeader);

const drinkSection = document.createElement('div');
drinkSection.classList.add('menu-section');
content.appendChild(drinkSection);

const foodHeader = document.createElement('h2');
foodHeader.classList.add('menu-header');
foodHeader.textContent = 'Food';
content.appendChild(foodHeader);

const foodSection = document.createElement('div');
foodSection.classList.add('menu-section');
content.appendChild(foodSection);

class menuItem {
    constructor(category, img, name, description, price) {
        let menuCard = document.createElement('div');
        menuCard.classList.add('menu-card');

        let imgEl = document.createElement('img');
        imgEl.classList.add('item-img');
        imgEl.src = img;
        menuCard.appendChild(imgEl);
        let nameEl = document.createElement('h3');
        nameEl.classList.add('item-name');
        nameEl.textContent = name;
        menuCard.appendChild(nameEl);
        let descEl = document.createElement('p');
        descEl.classList.add('item-desc');
        descEl.textContent = description;
        menuCard.appendChild(descEl);
        let priceEl = document.createElement('p');
        priceEl.classList.add('item-price');
        priceEl.textContent = price;
        menuCard.appendChild(priceEl);

        if (category == 'drink') {
            drinkSection.appendChild(menuCard);
        } else if (category == 'food') {
            foodSection.appendChild(menuCard)
        }
    };
}

const latte = new menuItem('drink', latteImg, 'Latte', 'House roast with oat milk and syrup of choice.', '4');
const chai = new menuItem('drink', chaiImg, 'Chai', 'Our own recipe with a classic blend of spices.', '3');
const cappuccino = new menuItem('drink', cappuccinoImg, 'Cappuccino', 'House roast with oat milk.', '4');
const macchiato = new menuItem('drink', macchiatoImg, 'Macchiato', 'House roast with steamed oat milk foam.', '4');
const espresso = new menuItem('drink', espressoImg, 'Espresso', 'House roast.', '3');
const mocha = new menuItem('drink', mochaImg, 'Mocha', 'House roast with homemade chocolate syrup and oat milk.', '4');
const teas = new menuItem('drink', teaImg, 'Assorted Teas', 'Tea specialties available in store.', '3');

const scones = new menuItem('food', sconeImg, 'Assorted Scones', 'Raspberry, Veggie, or Bacon.', '3');
const muffins = new menuItem('food', muffinImg, 'Assorted Muffins', 'Cherry, Strawberry, or Almond Poppyseed.', '3');
const frenchToast = new menuItem('food', frenchToastImg, 'French Toast', 'Served with butter, strawberries, and cream.', '6');
const croissant = new menuItem('food', croissantImg, 'Assorted Croissants', 'Chocolate, Strawberry, or Butter.', '4');
const biscotti = new menuItem('food', biscottiImg, 'Biscotti', 'Classic almond recipe, made in house.', '2');
const cinnamonBun = new menuItem('food', cinBunImg, 'Cinnamon Bun', 'Signature recipe and made in house.', '5');
