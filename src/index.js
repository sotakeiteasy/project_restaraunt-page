import loadPage from './loadPage.js';
import loadContacts from './contacts.js';
import loadMenu from './menu.js';

function initializeSite() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if(button.textContent === 'Menu'){
                loadMenu();
            } else if (button.textContent === 'Contacts') {
                loadContacts();
            } else if (button.textContent === "Main Page") {
                loadPage();
            }
        })
    })
    loadPage()
}

document.addEventListener('DOMContentLoaded', initializeSite);