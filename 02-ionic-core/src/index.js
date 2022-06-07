// chargement de la CSS du Framework Ionic
import '@ionic/core/css/ionic.bundle.css'

import {defineCustomElements} from "@ionic/core/loader"

const init = async () => {
    // chargement de tous les composants
    // la démarche n'est pas optimale car nous importons tous les composants
    await defineCustomElements();


    const response = await fetch('https://devfest-nantes-2018-api.cleverapps.io/blog');
    const data = await response.json();

    const eventList = document.getElementById("event-list");

    const src = 'https://devfest2018.gdgnantes.com/';

    data.forEach(event => {
        eventList.innerHTML += '<ion-card>\n'
        +  '<img src="' + src + event.image + '" />\n' +
           '<ion-card-header>' + 
           '<ion-card-title>' + event.title + '</ion-card-title>'
           + '</ion-card-header>\n' +
        '      <ion-card-content>\n' +
                event.brief +
        '      </ion-card-content>\n' +
        '    </ion-card>';
    });


        

}

init();

const toto = 'test toto';
