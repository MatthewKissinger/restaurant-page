(()=>{"use strict";const e=function(){const e=document.querySelector("#content"),n=document.createElement("h2");n.innerText="We only accept gold-pressed latinum";const t=document.createElement("h4");t.innerText="Located in the heart of Deep Space Nine, come grab a drink, play with ladyluck, or indulge if your fantasies in our Holosuite Arcades. Quark's is run by the enigmatic Ferengi of the same name.",e.appendChild(n),e.appendChild(t)};function n(e,n,t){e.classList.add("clicked"),n.classList.remove("clicked"),t.classList.remove("clicked")}document.addEventListener("DOMContentLoaded",(function(){let t=document.querySelector("#content"),c=document.querySelector("#about-button"),i=document.querySelector("#menu-button"),a=document.querySelector("#contact-button");e(),c.classList.add("clicked"),c.addEventListener("click",(function(){c.classList.contains("clicked")||(t.innerHTML="",e(),n(c,i,a))})),i.addEventListener("click",(function(){i.classList.contains("clicked")||(t.innerHTML="",function(){const e=document.querySelector("#content"),n=document.createElement("h2");n.classList.add("menu-heading"),n.innerText="Drink Menu";const t=document.createElement("div");t.classList.add("cardContainer");const c=document.createElement("div");c.classList.add("card"),c.innerHTML='<div class="menuItem-container">\n                        <h2 class="menuItem-name">Tea, Earl Grey, Hot</h2>\n                        <h3 class="menuItem-description">A favorite of Captain Jean Luc Picard</h3>\n                        </div>\n                        <img class="menu-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Tea_cup_icon.svg/1200px-Tea_cup_icon.svg.png">';const i=document.createElement("div");i.classList.add("card"),i.innerHTML='<div class="menuItem-container">\n                        <h2 class="menuItem-name">Saurian Brandy</h2>\n                        <h3 class="menuItem-description">The famed potent concoction</h3>\n                        </div>\n                        <img class="menu-icon" src="https://cdn.onlinewebfonts.com/svg/img_481047.png">';const a=document.createElement("div");a.classList.add("card"),a.innerHTML='<div class="menuItem-container">\n                        <h2 class="menuItem-name">Klingon Bloodwine</h2>\n                        <h3 class="menuItem-description">Ceremonial beverage: honor, duty, tradition</h3>\n                        </div>\n                        <img id="bloodwine" class="menu-icon" src="https://cdn.iconscout.com/icon/free/png-256/wine-glass-458010.png">',t.appendChild(c),t.appendChild(i),t.appendChild(a),e.appendChild(n),e.appendChild(t)}(),n(i,c,a))})),a.addEventListener("click",(function(){a.classList.contains("clicked")||(t.innerHTML="",function(){const e=document.querySelector("#content"),n=document.createElement("h2");n.innerText="Drop By";const t=document.createElement("h4");t.innerHTML="If you find yourself in the Alpha Quadrant, make your way to the Bajoran system. Deep Space Nine is in the Denorios Belt and the action is at Quarks!";const c=document.createElement("div");c.classList.add("contactImage"),c.innerHTML='<img src="https://wwwimage-secure.cbsstatic.com/thumbnails/photos/w1920-q80/marquee/1021640/f48b60d11fc49c81_stds9_sp_hero_landscape.jpg">',e.appendChild(n),e.appendChild(t),e.appendChild(c)}(),n(a,c,i))}))}))})();