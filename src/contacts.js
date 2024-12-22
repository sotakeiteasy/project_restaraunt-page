function loadContacts(){
    const content = document.querySelector('#content')
    content.textContent = '';  // Clear the existing content

    // Contact section
    const contactSection = document.createElement('section');
    contactSection.id = 'contact';
    const contactHeader = document.createElement('h2');
    contactHeader.textContent = 'Contact Information';
    const address = document.createElement('p');
    address.textContent = 'Address: 123 Sample Street, City, Country';
    const phone = document.createElement('p');
    phone.textContent = 'Phone: +1 (234) 567-8900';
    const email = document.createElement('p');
    email.textContent = 'Email: info@example.com';

    contactSection.appendChild(contactHeader);
    contactSection.appendChild(address);
    contactSection.appendChild(phone);
    contactSection.appendChild(email);



    content.appendChild(contactSection);
}

export default loadContacts;