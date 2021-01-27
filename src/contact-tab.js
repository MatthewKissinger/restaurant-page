

//setup module to fire after page has loaded, use either onload or document.ready



const contactContent = function(){

    const contentContainer = document.querySelector('#content');

    const contactHeadline = document.createElement('h2');
    contactHeadline.innerText = 'Drop By';

    const contactInfo = document.createElement('h4');
    contactInfo.innerHTML = `If you find yourself in the Alpha Quadrant, make your way to the Bajoran system. Deep Space Nine is in the Denorios Belt and the action is at Quarks!`;

    const contactImage = document.createElement('div');
    contactImage.classList.add('contactImage');
    contactImage.innerHTML = `<img src="https://wwwimage-secure.cbsstatic.com/thumbnails/photos/w1920-q80/marquee/1021640/f48b60d11fc49c81_stds9_sp_hero_landscape.jpg">`;

    contentContainer.appendChild(contactHeadline);
    contentContainer.appendChild(contactInfo);
    contentContainer.appendChild(contactImage);

    
}


export { contactContent }