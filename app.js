// import functions and grab DOM elements
import { getGardens, setCurrentGarden } from './local-storage-utilities.js';
import { renderGarden } from './dom-utils.js';
import { warnDuplicateName } from './utils.js';

const gardenList = document.querySelector('.gardens');
const form = document.querySelector('form');

// initialize state
function loadGardens() {
    const gardens = getGardens();

    // render the gardens and add them to page
    for (let garden of Object.values(gardens)) {
        const gardenDiv = renderGarden(garden);
        gardenList.appendChild(gardenDiv);
    }
}

// set event listeners to update state and DOM
form.addEventListener('submit', (e) => {
    // Checks for garden name duplicate, sets window location
    e.preventDefault();
    const formData = new FormData(form);
    const gardenName = formData.get('garden-name');
    const gardens = Object.keys(getGardens());
    if (gardens.includes(gardenName)) {
        warnDuplicateName();
        return false;
    }

    setCurrentGarden(gardenName);

    window.location = './setup/';
});

loadGardens();
