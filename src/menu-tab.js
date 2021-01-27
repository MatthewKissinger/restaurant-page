

//setup module to fire after page has loaded, use either onload or document.ready



const menuContent = function(){

    const contentContainer = document.querySelector('#content');

    const menuHeadline = document.createElement('h2');
    menuHeadline.classList.add('menu-heading');
    menuHeadline.innerText = 'Drink Menu';

    const cardContainer = document.createElement('div');
    cardContainer.classList.add('cardContainer');

    const card1 = document.createElement('div');
    card1.classList.add('card');
    card1.innerHTML= `<div class="menuItem-container">
                        <h2 class="menuItem-name">Tea, Earl Grey, Hot</h2>
                        <h3 class="menuItem-description">A favorite of Captain Jean Luc Picard</h3>
                        </div>
                        <img class="menu-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Tea_cup_icon.svg/1200px-Tea_cup_icon.svg.png">`;

    const card2 = document.createElement('div');
    card2.classList.add('card');
    card2.innerHTML= `<div class="menuItem-container">
                        <h2 class="menuItem-name">Saurian Brandy</h2>
                        <h3 class="menuItem-description">The famed potent concoction</h3>
                        </div>
                        <img class="menu-icon" src="https://cdn.onlinewebfonts.com/svg/img_481047.png">`;
    

    const card3 = document.createElement('div');
    card3.classList.add('card');
    card3.innerHTML= `<div class="menuItem-container">
                        <h2 class="menuItem-name">Klingon Bloodwine</h2>
                        <h3 class="menuItem-description">Ceremonial beverage: honor, duty, tradition</h3>
                        </div>
                        <img id="bloodwine" class="menu-icon" src="https://cdn.iconscout.com/icon/free/png-256/wine-glass-458010.png">`;


    cardContainer.appendChild(card1);
    cardContainer.appendChild(card2);
    cardContainer.appendChild(card3);


    contentContainer.appendChild(menuHeadline);
    contentContainer.appendChild(cardContainer);


}


export { menuContent }