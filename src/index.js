
import { aboutContent } from './about-tab.js'
import { menuContent } from './menu-tab.js'
import { contactContent } from './contact-tab.js'
//TODO List

// Push to GitHub

function clickedStatus(activeTab, passiveTab1, passiveTab2) {
    activeTab.classList.add('clicked');
    passiveTab1.classList.remove('clicked');
    passiveTab2.classList.remove('clicked');
}

document.addEventListener('DOMContentLoaded', function() {

    let contentContainer = document.querySelector('#content');
    let aboutButton = document.querySelector('#about-button');
    let menuButton = document.querySelector('#menu-button');
    let contactButton = document.querySelector('#contact-button');

    aboutContent();
    aboutButton.classList.add('clicked');

    aboutButton.addEventListener('click', function() {
        if (aboutButton.classList.contains('clicked')) {
            return;
        } else {
            contentContainer.innerHTML = '';
            aboutContent();
            clickedStatus(aboutButton, menuButton, contactButton);
        }
    })

    menuButton.addEventListener('click', function() {
        if (menuButton.classList.contains('clicked')) {
            return;
        } else {
            contentContainer.innerHTML = '';
            menuContent();
            clickedStatus(menuButton, aboutButton, contactButton);
        }
    })

    contactButton.addEventListener('click', function() {
        if (contactButton.classList.contains('clicked')) {
            return;
        } else {
            contentContainer.innerHTML = '';
            contactContent();
            clickedStatus(contactButton, aboutButton, menuButton);
        }
    })
});
    
