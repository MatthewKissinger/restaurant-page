

//setup module to fire after page has loaded, use either onload or document.ready



const contactContent = function(){

    const contentContainer = document.querySelector('#content');

    const contactHeadline = document.createElement('h2');
    contactHeadline.innerText = 'Drop By';

    const contactInfo = document.createElement('h4');
    contactInfo.innerHTML = `If you find yourself in the Alpha Quadrant, make your way to the Bajoran system. Deep Space Nine is in the Denorios Belt and the action is at Quarks!`;

    const contactImage = document.createElement('div');
    contactImage.classList.add('contactImage');
    contactImage.innerHTML = `<img src="images/ds9.jpg">`;

    contentContainer.appendChild(contactHeadline);
    contentContainer.appendChild(contactInfo);
    contentContainer.appendChild(contactImage);

    
}


export { contactContent }