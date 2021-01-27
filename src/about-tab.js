
//setup module to fire after page has loaded, use either onload or document.ready



const aboutContent = function(){

        const contentContainer = document.querySelector('#content');

        const restaurantHeadline = document.createElement('h2');
        restaurantHeadline.innerText = `We only accept gold-pressed latinum`;

        const restaurantCopy = document.createElement('h4');
        restaurantCopy.innerText = `Located in the heart of Deep Space Nine, come grab a drink, play with ladyluck, or indulge if your fantasies in our Holosuite Arcades. Quark's is run by the enigmatic Ferengi of the same name.`;

        contentContainer.appendChild(restaurantHeadline);
        contentContainer.appendChild(restaurantCopy);
        
}


export { aboutContent }